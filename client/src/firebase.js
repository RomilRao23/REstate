// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "romil-estate.firebaseapp.com",
  projectId: "romil-estate",
  storageBucket: "romil-estate.appspot.com",
  messagingSenderId: "472795115811",
  appId: "1:472795115811:web:28182a5d3d50ba34369c96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);