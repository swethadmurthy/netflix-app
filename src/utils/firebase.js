// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKdLIebwXPhhZjKaVs2EHZg3e_aTqtlQg",
  authDomain: "netflixapp-860df.firebaseapp.com",
  projectId: "netflixapp-860df",
  storageBucket: "netflixapp-860df.appspot.com",
  messagingSenderId: "831420998848",
  appId: "1:831420998848:web:161a060ff84f6c668cf925",
  measurementId: "G-WBYZDED3DZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();