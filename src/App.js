import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import Button from '@material-ui/core/Button';


const firebaseConfig = {

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
