import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAwAAYR6RiwDxVQ5MPHirZ1vjoeaDb2WHM",
    authDomain: "tinder-r.firebaseapp.com",
    projectId: "tinder-r",
    storageBucket: "tinder-r.appspot.com",
    messagingSenderId: "648977253066",
    appId: "1:648977253066:web:242c5adc38cdffe4a26a33"
};

const app = firebase.initializeApp(firebaseConfig);
const database = app.firestore();

export default database;