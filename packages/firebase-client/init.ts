// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8ScBgM__kqOEy6fWsGU71kB3Epo8VDZc",
  authDomain: "vision-guard-119.firebaseapp.com",
  projectId: "vision-guard-119",
  storageBucket: "vision-guard-119.firebasestorage.app",
  messagingSenderId: "881437713536",
  appId: "1:881437713536:web:9ca0ea26db88562c0eb265",
  measurementId: "G-C58NBSM6QQ"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);