// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA862CGzBBeubYSIPaFnpa3y5uwqwiHI4Q",
  authDomain: "proyecto1-e5dd0.firebaseapp.com",
  databaseURL: "https://proyecto1-e5dd0-default-rtdb.firebaseio.com",
  projectId: "proyecto1-e5dd0",
  storageBucket: "proyecto1-e5dd0.firebasestorage.app",
  messagingSenderId: "799578182589",
  appId: "1:799578182589:web:ff66c067b583f41dabf8d4",
  measurementId: "G-QDY19YFLWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase();