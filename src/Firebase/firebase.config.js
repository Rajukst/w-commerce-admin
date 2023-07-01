// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBNYqyhIGh9o5F8HSmOK82d8qDp9CJaUks",
  authDomain: "complete-routersix.firebaseapp.com",
  projectId: "complete-routersix",
  storageBucket: "complete-routersix.appspot.com",
  messagingSenderId: "658009557128",
  appId: "1:658009557128:web:e5ee3999efbc719593f73d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;