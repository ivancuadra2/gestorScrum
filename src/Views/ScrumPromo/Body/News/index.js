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
                  title="El primer modal AA PRUEBA TEXTO MUY LARGO LOREM LOREM" 
                  text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas"/>
              <New 
                  edit={props.edit}
                  title="el segundo modal" 
                  text="Modal 2 texto"/>
              <New 
                  edit={props.edit}
                  title="El tercer modal" 
                  text="Hola"/>
              <New 
                  edit={props.edit}
                  title="el cuarto modal" 
                  text="Cuarto modal"/>
              <New 
                  edit={props.edit}
                  title="El QUINTO modal" 
                  text="QUINTO"/>
              <New 
                  edit={props.edit}
                  title="el SEXTO modal" 
                  text="SEXTO modal"/>
              <New 
                  edit={props.edit}
                  title="El SEPTIMO modal" 
                  text="SEPTIMO"/>
              <New 
                  edit={props.edit}
                  title="el OCTAVO modal" 
                  text="OCTAVO modal"/>
            </div>
    </div>
  )
}
