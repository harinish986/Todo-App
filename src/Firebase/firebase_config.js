import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDYalep4CZeuq-NC4SdZTy5BmGG61Nz8uw",
    authDomain: "todo-app-641b5.firebaseapp.com",
    projectId: "todo-app-641b5",
    storageBucket: "todo-app-641b5.appspot.com",
    messagingSenderId: "833831314422",
    appId: "1:833831314422:web:9cf0493382fe9b836c9dd7"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db};