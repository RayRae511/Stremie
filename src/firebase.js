// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWzz5yhx85hDGwuVaHMf_rPrh-biiPC3A",
  authDomain: "stremie-58b0f.firebaseapp.com",
  projectId: "stremie-58b0f",
  storageBucket: "stremie-58b0f.appspot.com",
  messagingSenderId: "369782297658",
  appId: "1:369782297658:web:da7b22a32022ad0c395103",
  measurementId: "G-LW40HV6QGR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const analytics = getAnalytics(app)