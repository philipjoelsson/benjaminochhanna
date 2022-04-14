import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getDatabase } from "firebase/database";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBVwPlSFfuBhn0GDcRLUFJ_9uwuBl9xIMM",
  authDomain: "benjaminhanna-27830.firebaseapp.com",
  projectId: "benjaminhanna-27830",
  storageBucket: "benjaminhanna-27830.appspot.com",
  messagingSenderId: "179984943002",
  appId: "1:179984943002:web:1511d0c5e03bf9f4885c23",
  measurementId: "G-WPDR2TB308"
});

var db = firebaseApp.firestore();
const database = getDatabase(firebaseApp);

export { db, database };
