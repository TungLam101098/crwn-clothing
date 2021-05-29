import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAYWXucY7-LmHVYMaX3-q675ehF7l_HM7U",
  authDomain: "crwn-db-5cdbd.firebaseapp.com",
  projectId: "crwn-db-5cdbd",
  storageBucket: "crwn-db-5cdbd.appspot.com",
  messagingSenderId: "1024433794924",
  appId: "1:1024433794924:web:3fe102ff452a6800b8cd49",
  measurementId: "G-N4K5PMJV7J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
