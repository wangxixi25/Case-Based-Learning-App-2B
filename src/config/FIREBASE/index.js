import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyD_PqGoCcTYB4Cvlri0CkM-Lg5fTOvCM0I",
  authDomain: "noteapp-4bc44.firebaseapp.com",
  databaseURL: "https://noteapp-4bc44-default-rtdb.firebaseio.com",
  projectId: "noteapp-4bc44",
  storageBucket: "noteapp-4bc44.appspot.com",
  messagingSenderId: "184335712582",
  appId: "1:184335712582:web:16a4d2301892e30d056547"
});

const FIREBASE = firebase;

export default FIREBASE;