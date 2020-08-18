import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap/';
import logo from '../Views/ScrumPromo/Nav-Bar/logo2.png'
import firebase from '../config/firebase';
import { withRouter } from 'react-router-dom';
import UserController from '../Controller/UserController';
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
  const [open, setOpen] = React.useState(false);
  const { history } = props;
  const { email, img } = props;
  
  let users;

  async function handleGetUsers(e) {
    users = await UserController.getAllUsers();
    console.log(users);

  }


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