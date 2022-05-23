// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIW-yxeF-O7-2Dk9IcErjfLLD3QGIA7wE",
  authDomain: "realmod-proy-f.firebaseapp.com",
  projectId: "realmod-proy-f",
  storageBucket: "realmod-proy-f.appspot.com",
  messagingSenderId: "1025744171119",
  appId: "1:1025744171119:web:38f7422a24adb89d881d9a",
  measurementId: "G-363KNRKJ85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const google = new GoogleAuthProvider();
const facebook = new GoogleAuthProvider();
const baseDato = getFirestore();
const baseDato1 = getFirestore();
const baseDato2 = getFirestore();
const bd = getFirestore();
export {
    app,
    google,
    facebook,
    baseDato,
    baseDato1,
    baseDato2,
    bd
  }




