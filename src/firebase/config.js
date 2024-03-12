import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyALLvdLmvMd8y4NVfjQkNaEmm9GjP79Bck",

  authDomain: "expenses-3298f.firebaseapp.com",

  projectId: "expenses-3298f",

  storageBucket: "expenses-3298f.appspot.com",

  messagingSenderId: "958270822061",

  appId: "1:958270822061:web:d904b167f3f06982ef5824"

};

  



initializeApp(firebaseConfig);

const db = getFirestore();
export default db