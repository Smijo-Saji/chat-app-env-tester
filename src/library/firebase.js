import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "reactchat-299ec.firebaseapp.com",
  projectId: "reactchat-299ec",
  storageBucket: "reactchat-299ec.appspot.com",
  messagingSenderId: "407131707141",
  appId: "1:407131707141:web:5d7ddb080ece0f049a496c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
