import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation';
import firebase from '../../config/firebase';
import AdminRepo from '../../Repository/AdminRepo'
import TableUsers from './Table/TableUsers'; 
import TableLevels from './TableLevel/TableLevel'

import './main.css';

/* console.log('email: ' , firebase.getCurrentUsername()); */

function Main(props) {
  const [emailR, setEmail] = useState("");
  const [img, setImg] = useState("");
  const [levels, setLevels] = ("loading")

  useEffect(() => {
    const auth = firebase.auth;
    const { history } = props;

    // Checkear que los usuarios estén loggeados antes de entrar.
    const listenerAuth = auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push('/login');
      } else {
        setEmail(user.email);
        let email = user.email;
        setImg(user.photoURL);
        //console.log("user:", user)

        AdminRepo.getExistsAdmin(email).then((value) => {
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
      <Navigation email={emailR}
        img={img} />
      <TableUsers />
    </div>
  );
}

export default Main;
