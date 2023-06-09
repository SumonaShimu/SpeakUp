// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGEnTVba0MXGemDeA0StaixYdf0o1MQ5M",
  authDomain: "speakup-language-school.firebaseapp.com",
  projectId: "speakup-language-school",
  storageBucket: "speakup-language-school.appspot.com",
  messagingSenderId: "489480052861",
  appId: "1:489480052861:web:90e32773a218d678b09114"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);