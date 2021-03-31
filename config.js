import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyC_91ggo3k0jD2aqMD3kWQlLwxrOXIsdBI",
  authDomain: "booksanta-371bd.firebaseapp.com",
  projectId: "booksanta-371bd",
  storageBucket: "booksanta-371bd.appspot.com",
  messagingSenderId: "679597383083",
  appId: "1:679597383083:web:4d5d9bdc158f2846c806ee"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
