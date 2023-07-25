
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBBehG4honxbsYiaJUV5UGKivmrHvpr-3k",
    authDomain: "react-chat-bd691.firebaseapp.com",
    databaseURL: "https://react-chat-bd691-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-chat-bd691",
    storageBucket: "react-chat-bd691.appspot.com",
    messagingSenderId: "72736493325",
    appId: "1:72736493325:web:c3cb8b8e03e376fe10aa44",
    measurementId: "G-QHB57L9ZGD"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();