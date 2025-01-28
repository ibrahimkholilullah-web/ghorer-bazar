// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzfdlC5IFmfTaDukBlCFneQvnO3j5LWaI",
  authDomain: "ghorer-bazar-c5cd6.firebaseapp.com",
  projectId: "ghorer-bazar-c5cd6",
  storageBucket: "ghorer-bazar-c5cd6.firebasestorage.app",
  messagingSenderId: "191229390395",
  appId: "1:191229390395:web:52409b9b09aca18d90f61e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
