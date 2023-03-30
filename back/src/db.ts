import firebase from "firebase";
import config from "./config";
 
const db = firebase.initializeApp(config.firebaseConfig);

const auth = db.auth()

export { auth, db }