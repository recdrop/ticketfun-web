import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// Importe outros serviços do Firebase conforme necessário, como getFirestore, getStorage, etc.

const firebaseConfig = {
  apiKey: "AIzaSyAPTxCUmVTdpX0xn_XxE0cUvL5mmJV42IE",
  authDomain: "ticketfun-b951f.firebaseapp.com",
  projectId: "ticketfun-b951f",
  storageBucket: "ticketfun-b951f.appspot.com",
  messagingSenderId: "417239498198",
  appId: "1:417239498198:web:2a937bf24283d0aec23877",
  measurementId: "G-JLPGSXDRNX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
// Inicialize outros serviços do Firebase conforme necessário, como firestore, storage, etc.

export { app, auth, storage };
