// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL0-BTENt603ChplX_bGQA7tpU2B6blL8",
  authDomain: "react-learning-projects.firebaseapp.com",
  projectId: "react-learning-projects",
  storageBucket: "react-learning-projects.appspot.com",
  messagingSenderId: "549368836051",
  appId: "1:549368836051:web:71e1fbf9484e3500640926"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );