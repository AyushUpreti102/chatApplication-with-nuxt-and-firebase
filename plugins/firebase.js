// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {browserLocalPersistence, getAuth, initializeAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1Tr4ufBzwEcHzsjNi3ZW0XvGDTUu6oF8",
  authDomain: "chat-application-ef019.firebaseapp.com",
  projectId: "chat-application-ef019",
  storageBucket: "chat-application-ef019.appspot.com",
  messagingSenderId: "369669726382",
  appId: "1:369669726382:web:198c1f05ab5856241f0d3f",
  measurementId: "G-CJ9L6FF8JQ"
};

// Initialize Firebase
let app;
if (getApps().length < 1) app = initializeApp(firebaseConfig);
//initialize Firestore
const db = getFirestore(app);
//initialize storage
const storage = getStorage(app);
//initialize auth
const auth = (typeof document !== 'undefined') ? initializeAuth(app, {
  persistence: browserLocalPersistence,
  popupRedirectResolver: undefined,
}) : getAuth(app);
export { db, storage, auth };
// const analytics = getAnalytics(app);