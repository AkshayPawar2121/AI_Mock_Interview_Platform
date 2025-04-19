import { initializeApp, getApps , getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCq2K4XwCDP4hPCLah1wiJnFqxD0B6iiak",
  authDomain: "prepwise-182d9.firebaseapp.com",
  projectId: "prepwise-182d9",
  storageBucket: "prepwise-182d9.firebasestorage.app",
  messagingSenderId: "496236378508",
  appId: "1:496236378508:web:414fb0985536e9f5cdbea9",
  measurementId: "G-JRGHWH4FWM"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);