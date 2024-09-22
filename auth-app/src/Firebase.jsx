// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAi7Y7SUwXa7pXrpR3PR1rezb59-94fLnQ",
    authDomain: "auth-app-demo-3c8b5.firebaseapp.com",
    projectId: "auth-app-demo-3c8b5",
    storageBucket: "auth-app-demo-3c8b5.appspot.com",
    messagingSenderId: "434888729894",
    appId: "1:434888729894:web:cb37e344f8e7bc74c2cde7",
    measurementId: "G-FS8XRZZGPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;