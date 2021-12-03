import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
//import { getFirestore } from 'firebase/firestore'

// Firebase Config
//const firebaseConfig = {
//  apiKey: "AIzaSyD_WgOCVX4mjBjbDuoy-QRnYSwt94fUrko",
//  authDomain: "odontogenesis-react.firebaseapp.com",
//  projectId: "odontogenesis-react",
//  storageBucket: "odontogenesis-react.appspot.com",
//  messagingSenderId: "1005320903976",
//  appId: "1:1005320903976:web:722e14c223cf571d82041d"
//}
// Exports
// module.exports = firebaseConfig;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
