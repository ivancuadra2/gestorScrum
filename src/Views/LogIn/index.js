import React, { useState } from "react";
import firebase from "config/firebase";
import AdminController from "Controller/AdminController";
import Loading from "Loading";
import logo from "./logo.png";

import "./css.css";

export default function LogIn(props) {
  const { history } = props;

  const [loading, setLoading] = useState(false);
  const handleSetLoading = (value) => {
    setLoading(value);
  };

  const [data, setData] = useState({ user: "", password: "" });
  const handleSetData = (d) => {
    setData(d);
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    handleSetData({ ...data, [name]: target.value });
  };

  const handleLogInEmail = async (e) => {
    e.preventDefault();
    handleSetLoading(true);

    await firebase.auth
      .signInWithEmailAndPassword(data.user, data.password)
      .then(() => handleLogIn())
      .catch((e) => {
        handleSetLoading(false);
        setError(e);
      });
  };

  const handleLogInGoogle = async (e) => {
    e.preventDefault();
    handleSetLoading(true);
    const provider = firebase.googleProvider;
    await firebase.auth
      .signInWithPopup(provider)
      .then(() => handleLogIn())
      .catch((e) => {
        handleSetLoading(false);
        setError(e);
      });
  };

  const isAdmin = async () => {
    let email = firebase.getCurrentEmail();
    if (!email) return false;
    await AdminController.getAdminByEmail(email).then((value) => {
      if (value) return true;
      else return false;
    });
  };

  const handleLogIn = () => {
    let email = firebase.getCurrentEmail();
    if(email){
      handleSetLoading(true);
      if (isAdmin) {
        history.push("/Main");
      } else {
        handleSetLoading(false);
        setError({ code: "no-admin" });
      }
    }
  }

  const [error, setError] = useState(null);

  const getError = () => {
    if (error) {
      switch (error.code) {
        case "auth/user-not-found":
          return "El e-mail que has introducido no pertenece a ninguna cuenta. Comprueba el e-mail y vuelve a intentarlo.";
        case "auth/wrong-password":
          return "Tu contraseña no es correcta. Vuelve a comprobarla.";
        case "no-admin":
          return "No tienes los permisos para ingresar al panel de administrador.";
        default:
          return "E-mail o contraseña incorrectos.";
      }
    }
    return "";
  };
  
  return (
    <div className="login-page background-svg">
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <div className="form-login">
            <form className="login-form">
              <img src={logo} alt="logo" className="logo-login" />
              <input
                type="text"
                placeholder="E-mail"
                name="user"
                onChange={handleInputChange}
                value={data.user}
              />
              <input
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={handleInputChange}
                value={data.password}
              />
              <button
                className="button violet button-login"
                onClick={handleLogInEmail}
              >
                {/* loading ? <Loading /> :  */ "Iniciar sesión"}
              </button>

              <div className="divisor-login">
                <hr />
                o
                <hr />
              </div>

              <button
                onClick={handleLogInGoogle}
                className="button blue button-login"
              >
                Iniciar sesión con Google
              </button>
              {error && <p className="error">{getError()}</p>}
              <p className="no-account">
                ¿No tienes una cuenta? <b>Regístrate</b>
              </p>
            </form>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
