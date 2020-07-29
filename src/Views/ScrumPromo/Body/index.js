import React from 'react';
import WhatItIs from './WhatItIs';
import Stores from './Stores';
import Us from './Us';
/* import News from './News'; */

export default function Body(props) {
    return (
        <div>
            <WhatItIs 
                edit={props.edit} 
                title='¿Qué es Scrum Game?'
                subtitle='Aprende de forma inteligente'
                text='Scrum game es un juego serio cuyo objetivo es introducir a estudiantes de informática y desarrolladores de software en scrum. El juego está desarrollado para plataformas Android.'
                subtitle2='Los videojuegos como una aproximación al Serious gaming.'
                text2='Proyecto de investigación acreditado y aprobado por UADE'
                />
            <Stores 
                edit={props.edit}
                title='Accede desde cualquier dispositivo'
                text='¡Puedes jugar en cualquier lugar y cualquier momento! Descarga nuestra aplicación disponible tanto para Android como para IOS.'
            />
            <Us 
                edit={props.edit} 
                />
            {/* <News 
                edit={props.edit}
            /> */}
        </div>
    )
}
