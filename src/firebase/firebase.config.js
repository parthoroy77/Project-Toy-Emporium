// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_SECRET_APIKEY,
  authDomain: import.meta.env.VITE_SECRET_AUTHDOMAIN,
  projectId: import.meta.env.VITE_SECRET_PROJECTID,
  storageBucket: import.meta.env.VITE_SECRET_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_SECRET_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_SECRET_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
