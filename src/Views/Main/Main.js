import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation';
import firebase from '../../config/firebase';
import AdminRepo from '../../Repository/AdminRepo'
import TableUsers from './Table/TableUsers'; 
import PsychoUsersTable from "./Table/PsychoUsersTable";
import './main.css';

/* console.log('email: ' , firebase.getCurrentUsername()); */

export const GAMES = {
  SCRUM: "Scrum Game",
  PSYCHO: "Psycho Game"
};

function Main(props) {
  const [emailR, setEmail] = useState("");
  const [img, setImg] = useState("");
  const [game, setGame] = useState(GAMES.SCRUM)

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
  function renderUsersTable() {
    switch (game) {
      case GAMES.PSYCHO:
        return <PsychoUsersTable />;
      case GAMES.SCRUM:
        return <TableUsers />
      default:
        return null;
    }
  }
  return (
    <div >
      <Navigation email={emailR} img={img} game={game} onGameSelected={setGame} />
      {renderUsersTable()}
    </div>
  );
}

export default Main;
