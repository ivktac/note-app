import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwp2WgrX5nR9TL5fgfEzuNfelTtdN-KP4",
  authDomain: "react-notes-81f13.firebaseapp.com",
  projectId: "react-notes-81f13",
  storageBucket: "react-notes-81f13.appspot.com",
  messagingSenderId: "18272748865",
  appId: "1:18272748865:web:fdc20daa279c5f4c394dc0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
