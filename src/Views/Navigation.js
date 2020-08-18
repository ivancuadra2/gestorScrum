import React from 'react';
import { Navbar, Nav } from 'react-bootstrap/';
import logo from '../Views/ScrumPromo/Nav-Bar/logo2.png'
import firebase from '../config/firebase';
import { withRouter } from 'react-router-dom';
import './NavigationStyle.css'



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
  const { email, img } = props;
  
  return (
    <Navbar className="nav" bg="dark" variant="dark">
      <img className="logo" src={logo} alt="SCRUM Game" />
      <Nav className="mr-auto">
        <Nav.Link onClick={logOut}>Log out</Nav.Link>
      </Nav>
      <Navbar.Brand>{email}</Navbar.Brand>
      <img src ={img} alt="Avatar"></img>
    </Navbar>
  );
}

export default withRouter(Navigation)