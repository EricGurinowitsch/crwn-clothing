import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBPkCmR0b-Xuh8WTCctAILk58n4CN5YdiA",
    authDomain: "crwn-db-30657.firebaseapp.com",
    databaseURL: "https://crwn-db-30657.firebaseio.com",
    projectId: "crwn-db-30657",
    storageBucket: "crwn-db-30657.appspot.com",
    messagingSenderId: "289263187515",
    appId: "1:289263187515:web:dab16d4c914d692610ce1e",
    measurementId: "G-WQ4FQJ39P7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;