import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import Button from '@material-ui/core/Button';


const firebaseConfig = {
  apiKey: "AIzaSyB28SiRXzXt4PdeepGdgUym7XWh5KYWstw",
  authDomain: "gestorscrum.firebaseapp.com",
  databaseURL: "https://gestorscrum.firebaseio.com",
  projectId: "gestorscrum",
  storageBucket: "gestorscrum.appspot.com",
  messagingSenderId: "142439088048",
  appId: "1:142439088048:web:d15e88a0e90dddaf872075",
  measurementId: "G-PHVK5BHRMD"
};

firebase.initializeApp(firebaseConfig)

function App() {
  return (
    <Button variant="contained" color="primary">
      gestorscrum!
  </Button>
  );
}

export default App;
