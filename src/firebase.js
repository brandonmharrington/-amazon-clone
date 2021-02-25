import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCjDs9lb001u8ith9C-_wuNjBFsDMfvqRY',
  authDomain: 'clone-ca8c8.firebaseapp.com',
  projectId: 'clone-ca8c8',
  storageBucket: 'clone-ca8c8.appspot.com',
  messagingSenderId: '754244840354',
  appId: '1:754244840354:web:b8d9827860fceae6f4e0fb',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
