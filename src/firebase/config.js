// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpVHVOmv-pvCc0s3Pr_2cAZoecl_IYl5M",
  authDomain: "vue-firebase-fa463.firebaseapp.com",
  projectId: "vue-firebase-fa463",
  storageBucket: "vue-firebase-fa463.appspot.com",
  messagingSenderId: "504180017269",
  appId: "1:504180017269:web:02a7df0cc5fc8b8b6a103c",
  measurementId: "G-RM8G0S137J",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectAuth, projectFirestore, timestamp };
