
import { initializeApp } from 'firebase/app';
import 'firebase/auth'



const app = initializeApp({

  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,

  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,

  databaseURL: import.meta.env.VITE_REACT_APP_FIREBASE_DATABASE_URL,
  
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,

  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,

  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

  appId: import.meta.env.VITE_REACT_FIREBASE_APP_ID

});

export const auth = app

export default app

  
