import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuXeiPe07y_DLyoJFWXtcLipESmBI6J3Y",
  authDomain: "think-piece-e0770.firebaseapp.com",
  databaseURL: "https://think-piece-e0770.firebaseio.com",
  projectId: "think-piece-e0770",
  storageBucket: "think-piece-e0770.appspot.com",
  messagingSenderId: "509948007406",
  appId: "1:509948007406:web:7542283ad682ff8f"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

window.firebase = firebase;

export default firebase;
