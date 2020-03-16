import React from 'react';
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
    alignItems: 'center',
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

  auth.onAuthStateChanged(function(user) {
    if (user) {
      console.log('Nombre de usuario: ', user.displayName);
      history.push('/');
      // User is signed in.
    } else {
      alert('No estas loggeado')
      // No user is signed in.
    }
  });


  

  async function signOut(){
    
  }
  

  async function signInGoogle(){
    let auth = firebase.auth; 
    let googleProvider = firebase.googleProvider;

    

    
    
    // Start a sign in process for an unauthenticated user.
    var provider =  googleProvider;
    provider.addScope('profile');
    provider.addScope('email');
    console.log('llego al sigIn')

    auth.signInWithRedirect(provider);

     
    
    // await auth.getRedirectResult().then(function(result) {
    //   if (result.credential) {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
        
    //     var token = result.credential.accessToken;
    //     alert('entraste');
    //     // ...
    //   }
      
    //   alert('no entraste');
    //  // auth.signInWithRedirect(googleProvider);
    //   // The signed-in user info.
    //   var user = result.user;
    //   console.log('user:', user);
    // }).catch(function(error) {
    //   console.log('error:' , error)
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });


}

// async function  signInGoogle() {
//   let auth = firebase.auth; 
//   let googleProvider = firebase.googleProvider;
//   let email =  auth.signInWithRedirect(googleProvider)
//       .then((socialAuthUser) => {
//           //alert(socialAuthUser.user.uid + socialAuthUser.user.email);
//           console.log('email :', socialAuthUser.user);

//           return socialAuthUser.user.email
//       });
//   return email;
// }
  



  

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
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick= {signOut}
          >
            Sign Out
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
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

