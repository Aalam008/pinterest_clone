// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbdiUimHL2GktHPdockRbyIXyqg42w5F0",
  authDomain: "pinterestclone-bf367.firebaseapp.com",
  projectId: "pinterestclone-bf367",
  storageBucket: "pinterestclone-bf367.appspot.com",
  messagingSenderId: "783632860501",
  appId: "1:783632860501:web:254fc26cea27c0856fdbdc",
  measurementId: "G-DKERGWVWRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;