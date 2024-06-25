import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFhYwiNOZ8fxu9l8C85sZlPWJyJ3Gkojw",
  authDomain: "leobitmesra-3c8ab.firebaseapp.com",
  projectId: "leobitmesra-3c8ab",
  storageBucket: "leobitmesra-3c8ab.appspot.com",
  messagingSenderId: "420326222112",
  appId: "1:420326222112:web:2d1d8ef6f91d048ba28f45"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const imageDB = getStorage(app);
