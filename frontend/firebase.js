// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "foodigo-2db62.firebaseapp.com",
  projectId: "foodigo-2db62",
  storageBucket: "foodigo-2db62.firebasestorage.app",
  messagingSenderId: "52459096190",
  appId: "1:52459096190:web:e987a32559c050ff77302f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}