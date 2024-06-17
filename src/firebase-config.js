import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDlxO8P4scrQZzFksnyqFkHJn1Rbvuve44",
  authDomain: "leobitmesra-b5861.firebaseapp.com",
  databaseURL: "https://leobitmesra-b5861-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "leobitmesra-b5861",
  storageBucket: "leobitmesra-b5861.appspot.com",
  messagingSenderId: "580023341159",
  appId: "1:580023341159:web:e8e0da03a5bc055fe784c2",
  databaseURL : "https://leobitmesra-b5861-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const imageDB = getStorage(app);