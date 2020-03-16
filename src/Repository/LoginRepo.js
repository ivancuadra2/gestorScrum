import firebase from '../config/firebase';




  async function signInGoogle(){

    // Accedo a los métodos del backend de firebase googleProvider y auth ver documentación en firebase
    let auth = firebase.auth; 
    let googleProvider = firebase.googleProvider;

    console.log("auth : ", auth);
    
    
    //Esto está medio al pedo
    auth.getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
      }
      var user = result.user;
    });
    
    // Start a sign in process for an unauthenticated user.
    var provider =  googleProvider;
    console.log('provider: ', provider);
    provider.addScope('profile');
    provider.addScope('email');
    auth.signInWithRedirect(provider);
    return user;


}