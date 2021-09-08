import React, { useState } from "react";

const Context = React.createContext({});

export function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState("ES");
  const texts =
    language === "ES"
      ? {
          BUTTON_REGISTER: "Registrarse",
          BUTTON_LOGIN: "Iniciar sesion",
          BUTTON_SAVE: "Guardar",
          BUTTON_CANCEL: "Cancelar",
          BUTTON_CLOSE: "Cerrar",
          HEADER_TITLE: "¡El juego ideal para aprender SCRUM!",
          HEADER_BUTTON: "¿QUÉ ES SCRUM GAME?",
          HEADER_BUTTON2: "COMENZAR A JUGAR",
          WHATISIT_SUBTITLE: "Aprende de forma inteligente",
          WHATISIT_TEXT:
            "Scrum game es un juego serio cuyo objetivo es introducir a estudiantes de informática y desarrolladores de software en scrum. El juego está desarrollado para plataformas Android.",
          WHATISIT_SUBTITLE2:
            "Los videojuegos como una aproximación al Serious Gaming",
          WHATISIT_TEXT2:
            "Proyecto de investigación acreditado y aprobado por UADE.",
          STORES_TITLE: "Accede desde cualquier dispositivo",
          STORES_TEXT:
            "¡Puedes jugar en cualquier lugar y cualquier momento! Descarga nuestra aplicación disponible tanto para Android como para IOS.",
          EQUIPO: "Nuestro equipo",
          DIRECTOR_PROYECTO: "Director del Proyecto",
          DESARROLLADOR_WEB: "Desarrollo Web",
          DESARROLLADOR_MOBILE: "Desarrollo Mobile",
          DESARROLLADOR: "Desarrollador",
          ALUMNO_MAESTRIA: "Alumno de Maestría - Desarrollador",
          FOOTER_TEXT: "¿Qué estás esperando?",
        }
      : {
          BUTTON_REGISTER: "Sign Up",
          BUTTON_LOGIN: "Sign In",
          BUTTON_SAVE: "Save",
          BUTTON_CANCEL: "Cancel",
          BUTTON_CLOSE: "Close",
          HEADER_TITLE: "The best game for learning SCRUM!",
          HEADER_BUTTON: "WHAT IS SCRUM GAME?",
          HEADER_BUTTON2: "START TO PLAY",
          WHATISIT_SUBTITLE: "Learn in a smart way",
          WHATISIT_TEXT:
            "Scrum game is a serious game that aims to introduce computer science students and software developers into scrum. The game is developed for Android platforms.",
          WHATISIT_SUBTITLE2: "Video games as an approach to Serious gaming",
          WHATISIT_TEXT2: "Research project accredited and approved by UADE.",
          STORES_TITLE: "Access from any device",
          STORES_TEXT:
            "You can play anywhere and in anytime! Download our application available for both Android and IOS.",
          EQUIPO: "Our team",
          DIRECTOR_PROYECTO: "Project Director",
          DESARROLLADOR_WEB: "Web Developer",
          DESARROLLADOR_MOBILE: "Mobile Developer",
          DESARROLLADOR: "Developer",
          ALUMNO_MAESTRIA: "Master's Student - Developer",
          FOOTER_TEXT: "What are you waiting for?",
        };

  return (
    <Context.Provider
      value={{
        language,
        setLanguage,
        texts,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
