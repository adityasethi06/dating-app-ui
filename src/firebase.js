import firebase from 'firebase';
import { apiKey, authDomain, databaseURL } from './keys/apikeys'

const firebaseConfig = {
    apiKey: `${apiKey}`,
    authDomain: `${authDomain}`,
    databaseURL: `${databaseURL}`,
    projectId: "tinder-clone-e91c0",
    storageBucket: "tinder-clone-e91c0.appspot.com",
    messagingSenderId: "531295634179",
    appId: "1:531295634179:web:acdffb5bedb94ea3be9f36",
    measurementId: "G-1B7BLVVF7Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;