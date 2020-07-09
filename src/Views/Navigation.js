import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
/* import Typography from '@material-ui/core/Typography'; */
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import firebase from '../config/firebase';
import LockTwoTone from '@material-ui/icons/LockTwoTone'
import logo from './Image/logo2.png';
import {withRouter} from 'react-router-dom';
import UserController from '../Controller/UserController';



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    
  },
  
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'linear-gradient(180deg, #00E7FF, #063DCB)' ,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    //marginRight: theme.spacing(2),
    marginLeft : 'auto', 
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,// Antes era un MarginLeft y este depende del tamño del drawer
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0, // Antes era un MarginLeft
  },
}));

async function logOut(props){
  try {
      localStorage.setItem('emailForSignIn', '')
      await firebase.logout();    
      //localStorage.removeItem('userRole')
      //props.history.replace('/');
  } catch (error) {
      alert(error.message)
  }
}

function Navigation(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {history} = props ;
  let users ;

  async function handleGetUsers(e){
    users = await UserController.getAllUsers();
    console.log(users);

  }  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        background = 'dark'
        position="fixed"
        className= {classes.toolbar} 
      >
        <Toolbar>
          <img src={logo} alt="logo" width ='180px' alignItems='center'/>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge= "end"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Drawer //Al ponerlo después del main cambia la forma en que se abre
        className={classes.drawer}
        variant="persistent"
        anchor="right" // anteriormente estaba en el left
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text} onClick = {() => {history.push("/ScrumPromo")}}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          
            <ListItem onClick = {logOut} button key={'Cerrar Sesion'}>
              <ListItemIcon ><LockTwoTone /> </ListItemIcon>
              <ListItemText primary={'Cerrar Sesion'} />
            </ListItem>

            <ListItem onClick = {() => { handleGetUsers() }} button key={'Traer Usuarios'}>
              <ListItemIcon ><LockTwoTone /> </ListItemIcon>
              <ListItemText primary={'Traer Usuarios'} />
            </ListItem>
        
        </List>
      </Drawer>
    </div>
  );
}

export default withRouter(Navigation)