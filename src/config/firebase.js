// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGyxLR04tbyiREGzk7nxHN2MXIkb5UgWk",
    authDomain: "easy-crochet-9a792.firebaseapp.com",
    projectId: "easy-crochet-9a792",
    storageBucket: "easy-crochet-9a792.appspot.com",
    messagingSenderId: "1068147101988",
    appId: "1:1068147101988:web:ef7967025c047b354763b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)