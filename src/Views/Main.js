import Navigation from './Navigation';
import React from 'react';
import firebase from '../config/firebase';
//import {withRouter} from 'react-router-dom' ;



console.log('email: ' , firebase.getCurrentUsername());



function Main(props){

    const auth = firebase.auth;
    const {history} = props;

    // Checkear que los usuarios estén loggeados antes de entrar. 
    auth.onAuthStateChanged(function(user) {
        if (!user && localStorage.getItem('emailForSignIn') !== 'cuadradoivan1990@gmail.com') {
          history.push('/login');
          // User is signed in.
        }else{
            console.log('Nombre de usuario: ', user.displayName);
        }
      });
    

    return(
        <Navigation/>
    );
};

export default Main;