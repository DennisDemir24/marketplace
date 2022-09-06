// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_VGiMu60moLlSsULS6Tc1WfRM61zvUvw",
  authDomain: "house-marketplace-e7681.firebaseapp.com",
  projectId: "house-marketplace-e7681",
  storageBucket: "house-marketplace-e7681.appspot.com",
  messagingSenderId: "804336653953",
  appId: "1:804336653953:web:7fad6804b9de80b9d79f80",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = new getFirestore();
