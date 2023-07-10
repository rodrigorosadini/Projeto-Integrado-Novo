import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzgOuqt4RZhet2uNx7nJ6pd2Vq5-OBpgA",
  authDomain: "pi-final-d2d42.firebaseapp.com",
  projectId: "pi-final-d2d42",
  storageBucket: "pi-final-d2d42.appspot.com",
  messagingSenderId: "911206564321",
  appId: "1:911206564321:web:8e0c5eae8341e109d992a0",
  measurementId: "G-7Q4SP4LNY5",
};

export const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
export const auth = getAuth(app);
