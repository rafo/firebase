// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkioNgiAXbEWmp-QbAsSlyexAF86I71jw",
  authDomain: "test-a7b71.firebaseapp.com",
  projectId: "test-a7b71",
  storageBucket: "test-a7b71.appspot.com",
  messagingSenderId: "339141383184",
  appId: "1:339141383184:web:88b402b681e9a124922695",
  measurementId: "G-Y70GECMDGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);