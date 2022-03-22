import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdZIPSzWjsvYfKGRQya_rC_dGpW4fY26I",
  authDomain: "movie-quote-569b9.firebaseapp.com",
  projectId: "movie-quote-569b9",
  storageBucket: "movie-quote-569b9.appspot.com",
  messagingSenderId: "750604847809",
  appId: "1:750604847809:web:2d0f61d4409a7540f76240"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };