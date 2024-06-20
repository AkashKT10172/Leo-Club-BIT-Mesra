import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTcyOkzJZ9Rr_DS579pQNotEDmpS4ok5o",
  authDomain: "leobitmesra-dc627.firebaseapp.com",
  projectId: "leobitmesra-dc627",
  storageBucket: "leobitmesra-dc627.appspot.com",
  messagingSenderId: "108307406656",
  appId: "1:108307406656:web:212ae0e6f8eac3e2a2a4a5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const imageDB = getStorage(app);
