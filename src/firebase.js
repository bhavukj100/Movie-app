// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACrTEzpOLKkmWhuSH5TcIt0wLQUxdKCSA",
  authDomain: "movieapp-clouds.firebaseapp.com",
  projectId: "movieapp-clouds",
  storageBucket: "movieapp-clouds.appspot.com",
  messagingSenderId: "415200175151",
  appId: "1:415200175151:web:92c75760d5a4a9e01312da",
  measurementId: "G-YEC53M6YTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const signInWithFirebase = () => signInWithPopup(auth, provider);

// Incase you want to change some functionality 
// import { getAuth, signInWithRedirect } from "firebase/auth";

// const auth = getAuth();
// signInWithRedirect(auth, provider);