import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAnJQmBZNCJuyC9p5lbfEJhHgO9XQkIgiE",
    authDomain: "quora-clone-2eaa4.firebaseapp.com",
    projectId: "quora-clone-2eaa4",
    storageBucket: "quora-clone-2eaa4.appspot.com",
    messagingSenderId: "790373211069",
    appId: "1:790373211069:web:d24a5a0313f461bed890d4",
    measurementId: "G-9F523SZR7C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();

export {auth, provider};

export default db;