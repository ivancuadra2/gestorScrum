import React from 'react';
import './App.css'; 
import { BrowserRouter, Route  } from "react-router-dom";
//import SignIn from './Views/LogIn/LogIn2';
import SignUp from './Views/LogIn/Login';
import Main from './Views/Main';






//firebase.initializeApp(firebaseConfig)

function App() {
  

  return (
    <BrowserRouter>
      <Route path="/login" component={SignUp} exact/>
      <Route path = "/" component= {Main} exact/>
    </BrowserRouter>
    
    
  );
}

export default App;

