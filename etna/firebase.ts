import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC7WXMr16xIw6ZxIJ1kSUTubM0wMKbSKGQ",
  authDomain: "etna-89a21.firebaseapp.com",
  databaseURL: "https://etna-89a21-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "etna-89a21",
  storageBucket: "etna-89a21.appspot.com",
  messagingSenderId: "786241683428",
  appId: "1:786241683428:web:7b2ea33e0f394398b911f1",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
