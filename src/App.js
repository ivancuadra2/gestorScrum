import React from 'react';
import './App.css'; 
import { BrowserRouter, Route  } from "react-router-dom";
//import SignIn from './Views/LogIn/LogIn2';
import SignUp from './Views/LogIn/Login';
import Main from './Views/Main/Main';
import promoScrum from './Views/ScrumPromo/App';






//firebase.initializeApp(firebaseConfig)

function App() {
  

  return (
    <BrowserRouter>
      <Route path="/Login" component={SignUp} exact/>
      <Route path = "/Main" component= {Main} exact/>
      <Route path = "/" component= {promoScrum} exact/>
    </BrowserRouter>
    
    
  );
}

export default App;

