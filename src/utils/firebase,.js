// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASv4EoW7gAPguxflSQ9h_Mjzh2xjmVHEU",
  authDomain: "netflix-gpt-2e40b.firebaseapp.com",
  projectId: "netflix-gpt-2e40b",
  storageBucket: "netflix-gpt-2e40b.appspot.com",
  messagingSenderId: "647866663703",
  appId: "1:647866663703:web:05d222bd78b49da1f3ed52",
  measurementId: "G-7YRLYLC10X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();