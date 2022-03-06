import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAp74c01DohlDpgghMn3r2owgBkCC_cYX8",
    authDomain: "linkedin-clone-a7359.firebaseapp.com",
    projectId: "linkedin-clone-a7359",
    storageBucket: "linkedin-clone-a7359.appspot.com",
    messagingSenderId: "1030046190963",
    appId: "1:1030046190963:web:f4f8c7af59b644343f4906",
    measurementId: "G-9EY55SCT94"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };