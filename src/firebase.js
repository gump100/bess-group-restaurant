import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXJGkqQyZlHfmGWJJoP436xsZ9ng3HVOY",
  authDomain: "bess-group-restaurant.firebaseapp.com",
  projectId: "bess-group-restaurant",
  storageBucket: "bess-group-restaurant.firebasestorage.app",
  messagingSenderId: "165733735511",
  appId: "1:165733735511:web:b43df75b10de9903671712"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);