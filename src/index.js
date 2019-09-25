import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


firebase.initializeApp({
    apiKey: "AIzaSyCqVC_hj0pUF3-1AVtTzZnAqK0OdR35UdY",
    authDomain: "pseudogram-3052d.firebaseapp.com",
    databaseURL: "https://pseudogram-3052d.firebaseio.com",
    projectId: "pseudogram-3052d",
    storageBucket: "gs://pseudogram-3052d.appspot.com/",
    messagingSenderId: "585028345539",
    appId: "1:585028345539:web:a6bdbf08c9db4a27c3cc76"})
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
