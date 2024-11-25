// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth1-2669a.firebaseapp.com",
  projectId: "mern-auth1-2669a",
  storageBucket: "mern-auth1-2669a.firebasestorage.app",
  messagingSenderId: "377364500295",
  appId: "1:377364500295:web:ae34470a519c12f7a60662"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);