import * as firebase from 'firebase';

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDLd_bYZPdyuiMhuAqoBzLX4Pg_3Dk6iM0",
    authDomain: "scheduler-79565.firebaseapp.com",
    databaseURL: "https://scheduler-79565.firebaseio.com",
    projectId: "scheduler-79565",
    storageBucket: "scheduler-79565.appspot.com",
    messagingSenderId: "226469326548",
    appId: "1:226469326548:web:bc579e1bdcc408bc371541",
    measurementId: "G-YDNTMB360Q"
};

firebase.initializeApp(firebaseConfig);

export { firebase };