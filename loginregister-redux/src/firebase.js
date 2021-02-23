import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBymPSwr60WjBahUMlnUWf8AK0by3tigjM",
    authDomain: "linkedin-clone-adfa2.firebaseapp.com",
    projectId: "linkedin-clone-adfa2",
    storageBucket: "linkedin-clone-adfa2.appspot.com",
    messagingSenderId: "696017129642",
    appId: "1:696017129642:web:0045113247e515ada780d3",
    measurementId: "G-391M8PCZBS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};