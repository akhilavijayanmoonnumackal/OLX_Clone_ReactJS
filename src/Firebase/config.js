//import firebase from "firebase";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
//import 'firebase/firebase-app'
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTAR1nFoZnVEAI89BWr4Gze1mJE6n0OCQ",
    authDomain: "react-olx-clone-bd6b7.firebaseapp.com",
    projectId: "react-olx-clone-bd6b7",
    storageBucket: "react-olx-clone-bd6b7.appspot.com",
    messagingSenderId: "543359781317",
    appId: "1:543359781317:web:1eddf2c67e5a4498c2a3ac",
    measurementId: "G-JM11CMQ6BQ"
  }; 

  export default firebase.initializeApp(firebaseConfig)