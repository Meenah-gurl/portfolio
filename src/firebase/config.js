
import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyCr6mut9qRJWA8QngCt6g0OfRhMyhoDAwo",

  authDomain: "portfolio-2f69c.firebaseapp.com",

  projectId: "portfolio-2f69c",

  storageBucket: "portfolio-2f69c.appspot.com",

  messagingSenderId: "1093689352803",

  appId: "1:1093689352803:web:45a68b29af51f4ab368e56"

};

  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  const portfolioStorage = firebase.storage()
  const portfolioFirestore = firebase.firestore()

  export{portfolioStorage, portfolioFirestore}