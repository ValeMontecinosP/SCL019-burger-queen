// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMdJqNIPXXnrsv6I2a4JxIKQ6vd0M_PD8",
  authDomain: "bqapp-1df7f.firebaseapp.com",
  projectId: "bqapp-1df7f",
  storageBucket: "bqapp-1df7f.appspot.com",
  messagingSenderId: "486146891853",
  appId: "1:486146891853:web:dc81009f799233b1ad3c04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db}