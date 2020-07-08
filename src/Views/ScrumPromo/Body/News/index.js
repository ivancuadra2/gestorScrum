import React from 'react'
import New from './New';
import './css.css';

export default function News(props) {
  return (
    <div className="content-section content-width content-section-news"
      data-aos="fade-left" 
      data-aos-offset="300"
      data-aos-duration="1000" 
      >
            <h2>Novedades</h2>
            <div className="content-news">
              <New 
                  edit={props.edit} 
                  title="Ultimo Momento SCRUM GAME avanza en su desarrollo" 
                  text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas"/>
              <New 
                  edit={props.edit}
                  title="Entrevistas realizadas a usuarios de todo el mundo" 
                  text="Modal 2 texto"/>
              <New 
                  edit={props.edit}
                  title="Cambio de diseño en la página web" 
                  text="Hola"/>
              <New 
                  edit={props.edit}
                  title="Calificaciones de expertos se hacen públicas" 
                  text="Cuarto modal"/>
              <New 
                  edit={props.edit}
                  title="Se conoce el porcentaje de interesados en la nueva aplicación en desarrollo" 
                  text="QUINTO"/>
              <New 
                  edit={props.edit}
                  title="Las descargas de ScrumGameApp son mayores en Iphone que en Android" 
                  text="SEXTO modal"/>
              <New 
                  edit={props.edit}
                  title="Primeros pasos" 
                  text="SEPTIMO"/>
              <New 
                  edit={props.edit}
                  title="Opiniones de usuarios" 
                  text="El desarrollo "/>
            </div>
    </div>
  )
}
