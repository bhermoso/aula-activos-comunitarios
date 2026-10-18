// Ensayos de la encuesta de Loja. SOLO contra el emulador de Firestore.
// No usan credenciales ni leen/escriben en Firebase de producción.
import { readFileSync } from 'node:fs';
import { before, after, test } from 'node:test';
import { initializeTestEnvironment, assertFails, assertSucceeds } from '@firebase/rules-unit-testing';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, serverTimestamp, Timestamp } from 'firebase/firestore';

let env, db, n = 0;
const newId = () => 'ensayo_' + (++n);
const proposed = () => ({
  sector: 'Educación y comunidad educativa',
  sectorOtro: '',
  tipo: 'Centro educativo / AMPA',
  tipoOtro: '',
  entidad: 'Centro educativo de prueba',
  ambito: 'Núcleo urbano de Loja',
  ambitoOtro: '',
  grupo: 'Familias y comunidad educativa',
  funcion: 'Promoción de bienestar y participación',
  vinculo: 'Conozco su trabajo',
  participacion: false,
  createdAt: serverTimestamp(),
});
const ref = () => doc(db, 'encuestas_loja_2026', newId());

before(async () => {
  if (!process.env.FIRESTORE_EMULATOR_HOST) {
    throw new Error('Se requiere el emulador: no ejecutar contra Firebase real.');
  }
  env = await initializeTestEnvironment({
    projectId: 'demo-loja-reglas',
    firestore: { rules: readFileSync(new URL('../firestore-loja.rules', import.meta.url), 'utf8') },
  });
  db = env.unauthenticatedContext().firestore();
});
after(async () => { if (env) await env.cleanup(); });

test('permite crear propuesta válida sin autenticación', async () => {
  await assertSucceeds(setDoc(ref(), proposed()));
});
test('permite tres opciones Otro con texto explicativo', async () => {
  await assertSucceeds(setDoc(ref(), {
    ...proposed(), sector:'Otro sector', sectorOtro:'Iniciativas emergentes',
    tipo:'Otro tipo de actor', tipoOtro:'Red informal',
    ambito:'Otro ámbito', ambitoOtro:'Zona limítrofe',
  }));
});
test('rechaza Otro sector sin explicación', async () => {
  await assertFails(setDoc(ref(), { ...proposed(), sector:'Otro sector', sectorOtro:'' }));
});
test('rechaza otro tipo sin explicación', async () => {
  await assertFails(setDoc(ref(), { ...proposed(), tipo:'Otro tipo de actor', tipoOtro:'' }));
});
test('rechaza otro ámbito sin explicación', async () => {
  await assertFails(setDoc(ref(), { ...proposed(), ambito:'Otro ámbito', ambitoOtro:'' }));
});
test('rechaza campo adicional de contacto', async () => {
  await assertFails(setDoc(ref(), { ...proposed(), email:'nadie@ejemplo.invalid' }));
});
test('rechaza ausencia de un campo del esquema', async () => {
  const p=proposed(); delete p.grupo;
  await assertFails(setDoc(ref(),p));
});
test('rechaza booleano de participación con tipo incorrecto', async () => {
  await assertFails(setDoc(ref(), { ...proposed(), participacion:'sí' }));
});
test('rechaza cadenas mayores que las longitudes máximas', async () => {
  await assertFails(setDoc(ref(), { ...proposed(), funcion:'x'.repeat(501) }));
});
test('rechaza marca de tiempo del cliente en lugar de serverTimestamp', async () => {
  await assertFails(setDoc(ref(), { ...proposed(), createdAt:Timestamp.fromMillis(1) }));
});
test('impide leer por ID una respuesta creada', async () => {
  const p=ref(); await assertSucceeds(setDoc(p,proposed()));
  await assertFails(getDoc(p));
});
test('impide listar las respuestas', async () => {
  await assertFails(getDocs(collection(db,'encuestas_loja_2026')));
});
test('impide modificar una respuesta ya creada', async () => {
  const p=ref(); await assertSucceeds(setDoc(p,proposed()));
  await assertFails(updateDoc(p,{grupo:'alterado'}));
});
test('impide borrar una respuesta', async () => {
  const p=ref(); await assertSucceeds(setDoc(p,proposed()));
  await assertFails(deleteDoc(p));
});
test('impide crear un contacto personal por la vía pública', async () => {
  await assertFails(setDoc(doc(db,'contactos_loja_2026',newId()), {
    nombre:'Persona de prueba',correo:'nadie@ejemplo.invalid',telefono:'',
    consentimiento:true,createdAt:serverTimestamp(),
  }));
});
test('impide escribir fuera de la colección de Loja', async () => {
  await assertFails(setDoc(doc(db,'otros_municipios',newId()),{nota:'prueba'}));
});
