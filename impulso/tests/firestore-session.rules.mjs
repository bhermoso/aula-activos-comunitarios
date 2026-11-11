import {test, before, after, beforeEach} from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {readFileSync} from 'node:fs';
const require = createRequire(import.meta.url);
const {initializeTestEnvironment, assertSucceeds, assertFails} = require('@firebase/rules-unit-testing');
const {doc, getDoc, setDoc, deleteDoc, writeBatch, serverTimestamp} = require('firebase/firestore');
let environment;
const rootPath = 'aula_sessions/loja-2026-11-27';
const uid = 'coordinacion-loja';
before(async () => {
  environment = await initializeTestEnvironment({projectId: 'demo-aula-loja', firestore: {host: '127.0.0.1', port: 8085, rules: readFileSync(new URL('../firestore-sesion-loja.rules', import.meta.url), 'utf8')}});
});
after(async () => { await environment?.cleanup(); });
beforeEach(async () => {
  await environment.clearFirestore();
  await environment.withSecurityRulesDisabled(async context => {
    await setDoc(doc(context.firestore(), 'aula_session_editors', uid), {active: true, scope: 'loja'});
  });
});
function snapshot(version = 1, extra = {}) {
  return {schema: 'aula-session-snapshot/v1', municipalityId: 'loja', sessionDate: '2026-11-27', version, content: '{"worksheet":{}}', updatedBy: uid, updatedAt: serverTimestamp(), ...extra};
}
function save(db, version = 1, extra = {}) {
  const batch = writeBatch(db);
  const value = snapshot(version, extra);
  batch.set(doc(db, rootPath), value);
  batch.set(doc(db, rootPath, 'versions', String(version)), value);
  return batch.commit();
}
test('El editor de Loja guarda y recupera versiones con historial', async () => {
  const db = environment.authenticatedContext(uid).firestore();
  await assertSucceeds(save(db));
  await assertSucceeds(save(db, 2));
  assert.equal((await getDoc(doc(db, rootPath))).data().version, 2);
  assert.equal((await getDoc(doc(db, rootPath, 'versions', '1'))).data().version, 1);
});
test('El acceso anónimo y una cuenta sin autorización quedan denegados', async () => {
  for (const context of [environment.unauthenticatedContext(), environment.authenticatedContext('otra-cuenta')]) {
    await assertFails(getDoc(doc(context.firestore(), rootPath)));
    await assertFails(save(context.firestore()));
  }
});
test('La cuenta no puede concederse permisos ni cambiar su ámbito', async () => {
  const db = environment.authenticatedContext(uid).firestore();
  await assertFails(setDoc(doc(db, 'aula_session_editors', uid), {active: true, scope: 'otro'}));
  await assertFails(setDoc(doc(db, 'aula_session_editors', 'otra-cuenta'), {active: true, scope: 'loja'}));
});
test('Cada guardado exige el historial correspondiente', async () => {
  const db = environment.authenticatedContext(uid).firestore();
  await assertFails(setDoc(doc(db, rootPath), snapshot()));
  await assertSucceeds(save(db));
  await assertFails(setDoc(doc(db, rootPath), snapshot(2)));
});
test('Los originales históricos y las versiones conservadas son inmutables', async () => {
  const db = environment.authenticatedContext(uid).firestore();
  await assertSucceeds(save(db));
  await assertFails(setDoc(doc(db, rootPath, 'versions', '1'), snapshot(1, {content: 'cambio'})));
  await assertFails(deleteDoc(doc(db, rootPath)));
  await assertFails(deleteDoc(doc(db, rootPath, 'versions', '1')));
});
test('Se rechazan campos extra, tipo incorrecto, autor ajeno y ámbito diferente', async () => {
  const db = environment.authenticatedContext(uid).firestore();
  for (const extra of [{unexpected: true}, {content: 42}, {updatedBy: 'otra-cuenta'}, {municipalityId: 'alfacar'}, {sessionDate: '2026-11-28'}, {version: 0}, {updatedAt: new Date(0)}, {content: 'a'.repeat(700001)}]) await assertFails(save(db, 1, extra));
});
test('Una escritura atrasada no sustituye la versión posterior', async () => {
  const db = environment.authenticatedContext(uid).firestore();
  await assertSucceeds(save(db));
  const results = await Promise.allSettled([save(db, 2, {content: 'primero'}), save(db, 2, {content: 'segundo'})]);
  assert.equal(results.filter(result => result.status === 'fulfilled').length, 1);
  assert.equal((await getDoc(doc(db, rootPath))).data().version, 2);
});
