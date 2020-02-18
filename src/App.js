import React from 'react';
import './App.css'; 
//import * as firebase from 'firebase';
import HolaMundo from './Views/HolaMundo';
import Button from '@material-ui/core/Button';




//firebase.initializeApp(firebaseConfig)

function App() {
  return (
    <React.Fragment>
      <HolaMundo/>
    </React.Fragment>
    
  );
}

export default App;
