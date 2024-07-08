import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiQohmQoqWuSVwz0b33VQ-c5vCoyNJVPc",
  authDomain: "react-test-b3315.firebaseapp.com",
  databaseURL: "https://react-test-b3315-default-rtdb.firebaseio.com",
  projectId: "react-test-b3315",
  storageBucket: "react-test-b3315.appspot.com",
  messagingSenderId: "103930812840",
  appId: "1:103930812840:web:942459fd41f571307f659d",
  measurementId: "G-1PS4FYX20E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export { useAuthState } from "react-firebase-hooks/auth";
export { auth, provider, firebaseApp };
