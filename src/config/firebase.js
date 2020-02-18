    
//import { firebaseConfig } from './firebase-config';
import app from 'firebase/app';
//import 'firebase/auth';
//import 'firebase/firebase-firestore';
//import 'firebase-admin';
const firebaseConfig = {
    apiKey: "AIzaSyB28SiRXzXt4PdeepGdgUym7XWh5KYWstw",
    authDomain: "gestorscrum.firebaseapp.com",
    databaseURL: "https://gestorscrum.firebaseio.com",
    projectId: "gestorscrum",
    storageBucket: "gestorscrum.appspot.com",
    messagingSenderId: "142439088048",
    appId: "1:142439088048:web:d15e88a0e90dddaf872075",
    measurementId: "G-PHVK5BHRMD"
  };

const firebase = require("firebase");
//require("firebase/firestore");

/*
let firebaseConfig;
if (process.env.NODE_ENV === 'test') {
    firebaseConfig = process.env.FIREBASE_CONFIG;
} else {
    firebaseConfig = process.env.FIREBASE_CONFIG_GITLAB;
}
*/
 
class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
       // this.auth = app.auth();
        this.db = firebase.firestore();
        //this.googleProvider = new app.auth.GoogleAuthProvider();
        //this.admin = require("firebase-admin");
       // this.userValidated = null;
    }

}

export default new Firebase()
