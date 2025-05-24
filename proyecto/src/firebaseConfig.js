import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBxMWAoQ2Tf3u2sbuHK5wvkPJZ9N7QZHdU",
  authDomain: "pokeapi2-6bd64.firebaseapp.com",
  projectId: "pokeapi2-6bd64",
  storageBucket: "pokeapi2-6bd64.firebasestorage.app",
  messagingSenderId: "553892633704",
  appId: "1:553892633704:web:5db1e184f717a90fc86fdd"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };