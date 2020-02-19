import React from 'react';
import './App.css'; 
import { BrowserRouter, Route, withRouter  } from "react-router-dom";
import SignIn from './Views/LogIn/LogIn2';
import SignUp from './Views/LogIn/Login'





//firebase.initializeApp(firebaseConfig)

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={SignIn} exact/>
      <Route path="/login2" component={SignUp} exact/>
    </BrowserRouter>
    
    
  );
}

export default App;

