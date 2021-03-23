import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyA5eeenjB4u-Kdty40IeSqG-qHLoZ0SfsQ",
    authDomain: "meuapp-12da7.firebaseapp.com",
    databaseURL: "https://meuapp-12da7-default-rtdb.firebaseio.com",
    projectId: "meuapp-12da7",
    storageBucket: "meuapp-12da7.appspot.com",
    messagingSenderId: "563451074470",
    appId: "1:563451074470:web:a0da2fc4af2a4e5dda2167",
    measurementId: "G-7HGPMKTRHH"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  };

  export default firebase;
  
