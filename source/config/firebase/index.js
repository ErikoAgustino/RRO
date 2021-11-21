import { initializeApp } from "firebase/app"
import { firebase } from "@react-native-firebase/app";
import firestore from "firebase/firestore";
import { Firestore } from "@firebase/firestore";
import { collection } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDgdrL7XLbj7oTs-azDXAr-GJ3k_X0fLFU",
    authDomain: "rero-b4b7a.firebaseapp.com",
    projectId: "rero-b4b7a",
    storageBucket: "rero-b4b7a.appspot.com",
    messagingSenderId: "424777141057",
    appId: "1:424777141057:web:60458394218ca545bc2fc0",
    measurementId: "G-3MB2VCR33D"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app;
export default db;

