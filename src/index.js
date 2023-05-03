import React from 'react';
import ReactDOM from 'react-dom/client';
import { createContext } from 'react'
// import './index.css';
import App from './App';

import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import "firebase/compat/auth"

firebase.initializeApp({
  apiKey: "AIzaSyCmNYK_4t6w03uXqfXVyogEYrKF9An976M",
  authDomain: "dossier-base.firebaseapp.com",
  projectId: "dossier-base",
  storageBucket: "dossier-base.appspot.com",
  messagingSenderId: "794871086724",
  appId: "1:794871086724:web:02beeb6370f37de2180cd1",
  measurementId: "G-WRBFTC7P9D"
});

export const Context = createContext(null)

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{ firebase, auth, firestore }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
