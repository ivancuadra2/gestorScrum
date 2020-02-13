import React from 'react';
import './App.css'; 
import * as firebase from 'firebase';
import HolaMundo from './Views/HolaMundo';


const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig)

function App() {
  return (
    <HolaMundo/>
  );
}

export default App;
