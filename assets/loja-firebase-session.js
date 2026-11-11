import {initializeApp, getApps} from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js';
import {getFirestore, doc, getDocFromServer, runTransaction, serverTimestamp} from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js';

const SESSION_ID = 'loja-2026-11-27';
const app = getApps().find(item => item.name === 'aula-loja-session') ?? initializeApp(window.LOJA_FIREBASE_CONFIG.firebaseConfig, 'aula-loja-session');
const auth = getAuth(app);
const db = getFirestore(app);
const reference = doc(db, 'aula_sessions', SESSION_ID);

export function observeAccount(callback) { return onAuthStateChanged(auth, callback); }
export function connectAccount() { return signInWithPopup(auth, new GoogleAuthProvider()); }
export function disconnectAccount() { return signOut(auth); }

export async function loadSession() {
  if (!auth.currentUser) throw new Error('Accede con la cuenta de coordinación.');
  const snapshot = await getDocFromServer(reference);
  if (!snapshot.exists()) return null;
  const data = snapshot.data();
  if (data.schema !== 'aula-session-snapshot/v1' || data.municipalityId !== 'loja' || !Number.isInteger(data.version) || data.version < 1 || typeof data.content !== 'string') throw new Error('La sesión guardada tiene un formato incompatible.');
  return {version: data.version, payload: JSON.parse(data.content)};
}

export async function saveSession(payload, expectedVersion) {
  const user = auth.currentUser;
  if (!user) throw new Error('Accede con la cuenta de coordinación.');
  const content = JSON.stringify(payload);
  if (new TextEncoder().encode(content).length > 700000) throw new Error('La sesión supera el tamaño admitido. Conserva una copia y revisa sus documentos.');
  return runTransaction(db, async transaction => {
    const previous = await transaction.get(reference);
    const version = previous.exists() ? previous.data().version : 0;
    if (version !== expectedVersion) throw new Error('Otra persona ha guardado una versión diferente. Descarga tu hoja y recupera la sesión antes de conciliar los cambios.');
    const nextVersion = version + 1;
    const snapshot = {schema: 'aula-session-snapshot/v1', municipalityId: 'loja', sessionDate: '2026-11-27', version: nextVersion, content, updatedBy: user.uid, updatedAt: serverTimestamp()};
    const history = doc(db, 'aula_sessions', SESSION_ID, 'versions', String(nextVersion));
    transaction.set(reference, snapshot);
    transaction.set(history, snapshot);
    return nextVersion;
  });
}
