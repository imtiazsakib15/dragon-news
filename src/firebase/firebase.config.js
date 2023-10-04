import { getAuth } from "firebase/auth"; 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdzvs4p_ea2SjtFbU3nHgGVJ-hypY2T0s",
  authDomain: "dragon-news-9652d.firebaseapp.com",
  projectId: "dragon-news-9652d",
  storageBucket: "dragon-news-9652d.appspot.com",
  messagingSenderId: "433820210112",
  appId: "1:433820210112:web:61ba9f8e7b3738dae8ae25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
