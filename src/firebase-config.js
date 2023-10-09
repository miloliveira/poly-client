// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4BIJT341BTVar0cofseZn8_gfNjeBmzk",
  authDomain: "appchatly.firebaseapp.com",
  projectId: "appchatly",
  storageBucket: "appchatly.appspot.com",
  messagingSenderId: "59399613242",
  appId: "1:59399613242:web:30fe00dc12cacd95fcbe03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
