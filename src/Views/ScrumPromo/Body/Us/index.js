import React from "react";
import Circle from "./Circle";
import "./css.css";
import img from "./1.jpg";
import imgGuillermo from "./guillermo.jpg";
import imgNicolas from "./nico.jpg";
import imgAna from "./ana.jpg";

export default function Us(props) {
  return (
    <div
      className="content-width content-section content-us"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-duration="1000"
    >
      <h2>Nuestro equipo</h2>
      <div className="content-members">
        <Circle
          img={imgGuillermo}
          name="Guillermo Rodriguez"
          position="CEO"
          social={[
            {
              id: 0,
              red: "twitter",
              url: "https://www.facebook.com/pupimarti",
            },
            {
              id: 1,
              red: "github",
              url: "https://www.instagram.com/pupi_marti",
            },
            {
              id: 2,
              red: "whatsapp",
              url: "https://www.linkedin.com/in/pupimarti",
            },
          ]}
          edit={props.edit}
        />
        <Circle
          img={img}
          name="Juan Agustin Martí"
          position="Desarrollo web"
          social={[
            {
              id: 0,
              red: "facebook",
              url: "https://www.facebook.com/pupimarti",
            },
            {
              id: 1,
              red: "instagram",
              url: "https://www.instagram.com/pupi_marti",
            },
            {
              id: 2,
              red: "linkedin",
              url: "https://www.linkedin.com/in/pupimarti",
            },
          ]}
          edit={props.edit}
        />
        <Circle
          img="https://www.webcampus.uade.edu.ar/Fotos/1/ID_993091.jpg"
          name="Octavio Amietta"
          position="Desarrollo web"
          social={[
            {
              id: 0,
              red: "linkedin",
              url: "https://www.facebook.com/pupimarti",
            },
            {
              id: 1,
              red: "instagram",
              url: "https://www.instagram.com/pupi_marti",
            },
            {
              id: 2,
              red: "whatsapp",
              url: "https://www.linkedin.com/in/pupimarti",
            },
          ]}
          edit={props.edit}
        />
        <Circle
          img={imgNicolas}
          name="Nicolas Gladkoff"
          position=""
          social={[
            {
              id: 0,
              red: "none",
              url: "",
            },
            {
              id: 1,
              red: "none",
              url: "",
            },
            {
              id: 2,
              red: "none",
              url: "",
            },
          ]}
          edit={props.edit}
        />
        <Circle
          img={img}
          name="Juan Agustín Martí"
          position="Desarrollo web"
          social={[
            {
              id: 0,
              red: "facebook",
              url: "https://www.facebook.com/pupimarti",
            },
            {
              id: 1,
              red: "instagram",
              url: "https://www.instagram.com/pupi_marti",
            },
            {
              id: 2,
              red: "linkedin",
              url: "https://www.linkedin.com/in/pupimarti",
            },
          ]}
          edit={props.edit}
        />
        <Circle
          img={imgAna}
          name="Ana Martinez Saucedo"
          position=""
          social={[
            {
              id: 0,
              red: "facebook",
              url: "https://www.facebook.com/pupimarti",
            },
            {
              id: 1,
              red: "instagram",
              url: "https://www.instagram.com/pupi_marti",
            },
            {
              id: 2,
              red: "linkedin",
              url: "https://www.linkedin.com/in/pupimarti",
            },
          ]}
          edit={props.edit}
        />
        <Circle
          img={img}
          name="Juan Agustín Martí"
          position="Desarrollo web"
          social={[
            {
              id: 0,
              red: "facebook",
              url: "https://www.facebook.com/pupimarti",
            },
            {
              id: 1,
              red: "instagram",
              url: "https://www.instagram.com/pupi_marti",
            },
            {
              id: 2,
              red: "linkedin",
              url: "https://www.linkedin.com/in/pupimarti",
            },
          ]}
          edit={props.edit}
        />
      </div>
    </div>
  );
}
