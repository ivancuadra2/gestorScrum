import React, {useContext} from "react";
import LanguageContext from '../../../../Context/index';
import Circle from "./Circle";
import "./css.css";
import img from "./1.jpg";
import imgGuillermo from "./guillermo.jpg";
import imgNicolas from "./nico.jpg";
import imgAna from "./ana.jpg";
import noImg from './no-img.jpg';

export default function Us(props) {
  const { texts } = useContext(LanguageContext);
  return (
    <div
      className="content-width content-section content-us"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-duration="1000"
    >
      <h2>{texts.EQUIPO}</h2>
      <div className="content-members">
        <Circle
          img={imgGuillermo}
          name="Guillermo Rodriguez"
          position={texts.DIRECTOR_PROYECTO}
          social={[]}
          edit={props.edit}
        />
        <Circle
          img={img}
          name="Juan Agustin Martí"
          position={texts.DESARROLLADOR_WEB}
          social={[]}
          edit={props.edit}
        />
        <Circle
          img="https://www.webcampus.uade.edu.ar/Fotos/1/ID_993091.jpg"
          name="Octavio Amietta"
          position={texts.DESARROLLADOR_WEB}
          social={[]}
          edit={props.edit}
        />
        <Circle
          img={imgNicolas}
          name="Nicolas Gladkoff"
          position={texts.ALUMNO_MAESTRIA}
          social={[]}
          edit={props.edit}
        />
        <Circle
          img={noImg}
          name="Andrés Caroni"
          position={texts.DESARROLLADOR_MOBILE}
          social={[]}
          edit={props.edit}
        />
        <Circle
          img={imgAna}
          name="Ana Martinez Saucedo"
          position={texts.DESARROLLADOR_MOBILE}
          social={[]}
          edit={props.edit}
        />
        <Circle
          img={noImg}
          name="Iván Cuadrado"
          position={texts.DESARROLLADOR}
          social={[]}
          edit={props.edit}
        />
        <Circle
          img={noImg}
          name="Diego Perez"
          position={texts.DESARROLLADOR}
          social={[]}
          edit={props.edit}
        />
      </div>
    </div>
  );
}
