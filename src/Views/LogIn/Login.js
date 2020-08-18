import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GoogleButton from 'react-google-button';
import firebase from '../../config/firebase';
import { withRouter } from "react-router-dom";
import AdminController from '../../Controller/AdminController';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Scrum game
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  
  googleButton:{// Hoja de estilos del boton
    width : '100%',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp(props) {
  const classes = useStyles();
  // Descargo history de withRouter que guarda las rutas almacenadas
  const { history } = props;
  let auth = firebase.auth
  const [email, setEmail]= useState('')
  //console.log('localStoragEmail' ,localStorage.getItem('emailForSignIn'))
  

  function listenAuth(){
    auth.onAuthStateChanged(function(user) { // funcion que provee firebase para chekear que estes loggeado
      if (user) {
        console.log('Nombre de usuario: ', user.displayName);
        let email = user.email;// Me traigo el mail de quien pretende entrar
        AdminController.getAdminByEmail(email).then(value => { // si lo encuentro en la base de datos redirijo al Main
          console.log(value);
          if(value){history.push('/Main')}
          else{alert('No tiene permiso comuniquese con el administrador')}
               //if(value){history.push('/')}
              // else{console.Alert('No tienes permiso comunicate con el administrador')}
          })
        // User is signed in.
      }
    });}
  
  var actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url: 'https://gestorscrum.firebaseapp.com',
    // This must be true.
    handleCodeInApp: true,
   
   // dynamicLinkDomain: 'example.page.link'
  };
  
  function handleChange(event){
    console.log(event.target.value);
    setEmail(event.target.value);
    console.log('email :' , email);
  }
   
  function signInEmail(){
    console.log('llego al sign in :', email)
    auth.sendSignInLinkToEmail(email, actionCodeSettings)
      .then(function() {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email);
      })
      .catch(function(error) {
        console.log(error)
        // Some error occurred, you can inspect the code: error.code
  });

   

  } 
  async function signInGoogle(){
    let googleProvider = firebase.googleProvider;
    // Start a sign in process for an unauthenticated user.
    var provider =  googleProvider;
    provider.addScope('profile');
    provider.addScope('email');
    console.log('llego al sigIn')

    await auth.signInWithRedirect(provider);

}

listenAuth();


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />  
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <GoogleButton onClick = {signInGoogle}/>  
          <Button
            onClick = {signInEmail}
            //type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="lacuerda.net" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default withRouter(SignUp);

