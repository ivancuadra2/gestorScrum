import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation';
import firebase from '../../config/firebase';
import AdminController from 'Controller/AdminController';
import AdminRepo from '../../Repository/AdminRepo'
import TableUsers from './Table/TableUsers';

import './main.css';

/* console.log('email: ' , firebase.getCurrentUsername()); */

function Main(props) {
  const [emailR, setEmail] = useState("algo");
  const [img, setImg] = useState("")
  
  useEffect(() => {
    const auth = firebase.auth;
    const { history } = props;
    
    // Checkear que los usuarios estén loggeados antes de entrar.
    const listenerAuth = auth.onAuthStateChanged((user) => {
      if (!user) {
        //console.log(user);
        history.push('/login');
        // User is signed in.
      } else {
        setEmail(user.email) ;
        let email = user.email;
        setImg(user.photoURL) ;
        console.log("user:", user)

        AdminRepo.getExistsAdmin(email).then((value) => {
          //console.log(value);
          if (!value) {
            history.push('/login');
          }
        });
      }
    });

    return (() => {
      listenerAuth();
    })
  }, [props])

  return (
    <div >
      <Navigation email = {emailR}
                  img = {img}/>
      <TableUsers />
    </div>
  );
}

export default Main;
