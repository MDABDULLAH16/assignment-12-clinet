// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7QSfZV8sWy4Qi7hwbwrpX_UGnBulH3Kg",
    authDomain: "assignment-12-ebae3.firebaseapp.com",
    projectId: "assignment-12-ebae3",
    storageBucket: "assignment-12-ebae3.appspot.com",
    messagingSenderId: "41780051185",
    appId: "1:41780051185:web:e6b38f9d6c963433f33d50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)


export default auth;