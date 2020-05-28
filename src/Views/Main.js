import Navigation from './Navigation';
import React from 'react';
import firebase from '../config/firebase';
import AdminController from '../Controller/AdminController';




console.log('email: ' , firebase.getCurrentUsername());



function Main(props){

    const auth = firebase.auth;
    const {history} = props;
    

    // Checkear que los usuarios estén loggeados antes de entrar. 
    auth.onAuthStateChanged( user => {
        if (!user ) {
          console.log(user);
          history.push('/login');
          // User is signed in.
        }else{
          let email = user.email ;
          console.log('Nombre de usuario: ',email);
          AdminController.getAdminByEmail(email).then(value => {
                console.log(value);
                     if(!value){history.push('/login')}
                     else{console.log('Eres admin')}
                })
        } 
      });
    

    return(
        <React.Fragment>

          <Navigation/>  
        </React.Fragment>
        
    );
};

export default Main;