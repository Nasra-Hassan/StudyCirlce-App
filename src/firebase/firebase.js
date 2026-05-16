import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkaSQ97Vf2ITJHYJ4EpD4_QvfBUMLFXho",
  authDomain: "studycircle-850d3.firebaseapp.com",
  projectId: "studycircle-850d3",
  storageBucket: "studycircle-850d3.firebasestorage.app",
  messagingSenderId: "958956181125",
  appId: "1:958956181125:web:1b11ad9b7139ea12ac7bec"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export default app;