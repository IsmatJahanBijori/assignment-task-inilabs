// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    //   apiKey: "AIzaSyBbZCThk_IRrm7-aaX58riEeYmKSh0a4Z4",
    //   authDomain: "miro-9e2aa.firebaseapp.com",
    //   projectId: "miro-9e2aa",
    //   storageBucket: "miro-9e2aa.appspot.com",
    //   messagingSenderId: "40962232172",
    //   appId: "1:40962232172:web:0c5ac476f828da08926d49"
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);