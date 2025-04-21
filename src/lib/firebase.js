// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCsoPHJ8wapmFdk2rwC_QM6AEzHsIq-3L0",
    authDomain: "login-9a260.firebaseapp.com",
    projectId: "login-9a260",
    storageBucket: "login-9a260.firebasestorage.app",
    messagingSenderId: "825629640765",
    appId: "1:825629640765:web:c8d0595b15714043318254",
    measurementId: "G-XNRRL1NTC9"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and firestore if needed
export const auth = getAuth(app);
export const db = getFirestore(app);
