// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkhG45r3vb43sctQpoeofkd5c9dgDgsBo",
  authDomain: "hi-twitter-487ba.firebaseapp.com",
  projectId: "hi-twitter-487ba",
  storageBucket: "hi-twitter-487ba.appspot.com",
  messagingSenderId: "993469435250",
  appId: "1:993469435250:web:3347f5ac1f7f73b17ba1eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// yetkilendirmenin referansını alma
export const auth = getAuth(app);

// google saglayıcı kurulumu
export const provider = new GoogleAuthProvider();

// veirtabının referansını alma
export const db = getFirestore(app);

// depolam alanın referansını alma
export const storage = getStorage(app);
