// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuyat-tlr3WeV-DVg8m-cmPJGWnKv3YZM",
  authDomain: "prepwise-6da45.firebaseapp.com",
  projectId: "prepwise-6da45",
  storageBucket: "prepwise-6da45.firebasestorage.app",
  messagingSenderId: "486869651980",
  appId: "1:486869651980:web:687a540be7a5ee48acd429",
  measurementId: "G-W0WRS7YP66"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);