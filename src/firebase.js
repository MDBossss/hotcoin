import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB1PL0Z3m2e1ULfGVowfYbfDeJ8EX3oVaA",
  authDomain: "hotcoin-eefd3.firebaseapp.com",
  projectId: "hotcoin-eefd3",
  storageBucket: "hotcoin-eefd3.appspot.com",
  messagingSenderId: "81333461492",
  appId: "1:81333461492:web:630a7f72d07adf3ffb19a1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()