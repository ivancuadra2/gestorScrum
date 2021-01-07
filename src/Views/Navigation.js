import React from 'react';
import { Navbar, Nav } from 'react-bootstrap/';
import logo from '../Views/ScrumPromo/Nav-Bar/logo2.png'
import firebase from '../config/firebase';
import { withRouter } from 'react-router-dom';
import './NavigationStyle.css'
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { GAMES } from './Main/Main';


async function logOut(props) {
  try {
    localStorage.setItem('emailForSignIn', '')
    await firebase.logout();
    //localStorage.removeItem('userRole')
    props.history.replace('/');
  } catch (error) {
    alert(error.message)
  }
}

function Navigation(props) {
  //const { history } = props;
  const { email, img, game, onGameSelected } = props;
  function renderGameSelect() {
    const handleGameChange = event => onGameSelected(event.target.value);
    return (<Select
      value={game}
      onChange={handleGameChange}>
      {Object.values(GAMES).map((g, i) => <MenuItem key={i} value={g}>{g}</MenuItem>)}
    </Select>);
  }
  return (
    <Navbar className="nav" bg="dark" variant="dark">
      <img className="logo" src={logo} alt="SCRUM Game" />
      <Nav className="mr-auto">
      {renderGameSelect()}
      </Nav>
      <Navbar.Brand>{email}</Navbar.Brand>
      <img src ={img} alt="Avatar"></img>
      <Nav.Link onClick={logOut}>Log out</Nav.Link>
    </Navbar>
  );
}

export default withRouter(Navigation)