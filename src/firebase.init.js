// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnelLEO-jSdjnzPEMJ4ZKyTJYi-QeIKSc",
  authDomain: "hotel-management-auth-b3bc7.firebaseapp.com",
  projectId: "hotel-management-auth-b3bc7",
  storageBucket: "hotel-management-auth-b3bc7.appspot.com",
  messagingSenderId: "101920868690",
  appId: "1:101920868690:web:5374aae9bbdbfeea87d28b"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
const auth = getAuth( app );

export default auth;
