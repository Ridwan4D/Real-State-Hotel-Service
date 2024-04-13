// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbwmqg2Fm-zuoCT5w26k0-my_Dt5pT6rM",
    authDomain: "the-reez-auth.firebaseapp.com",
    projectId: "the-reez-auth",
    storageBucket: "the-reez-auth.appspot.com",
    messagingSenderId: "695909360187",
    appId: "1:695909360187:web:7c38ed036a8ad5a5c9721e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;