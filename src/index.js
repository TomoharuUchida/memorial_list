import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FirestoreList from './components/FirestoreList'
import FirebaseAuthSignupButton from './components/FirebaseAuthSignupButton'
import FirebaseAuthSignoutButton from './components/FirebaseAuthSignoutButton'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAuthSignoutButton/>
    <FirebaseAuthSignupButton/>
    <App />
    <FirestoreList/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
