// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBRFbEq_vi2l4PHkqfXcYEt965ndt7--7c",
  authDomain: "tweet-clone-9f38b.firebaseapp.com",
  databaseURL: "https://tweet-clone-9f38b-default-rtdb.firebaseio.com",
  projectId: "tweet-clone-9f38b",
  storageBucket: "tweet-clone-9f38b.appspot.com",
  messagingSenderId: "273680382847",
  appId: "1:273680382847:web:a26ab1a8938b654f62784a",
  measurementId: "G-SBN0H543H3",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
