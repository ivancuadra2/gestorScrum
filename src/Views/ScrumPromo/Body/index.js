import React from 'react';
import WhatItIs from './WhatItIs';
import Stores from './Stores';
import Us from './Us';
import News from './News';

export default function Body(props) {
    return (
        <div>
            <WhatItIs 
                edit={props.edit} 
                title='¿Qué es Scrum Game?'
                subtitle='Aprende de forma inteligente'
                text='Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.'
                subtitle2='Súper intuitivo y eficaz'
                text2='Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare..'
                />
            <Stores 
                edit={props.edit}
                title='Accede desde cualquier dispositivo'
                text='¡Puedes jugar en cualquier lugar y cualquier momento! Descarga nuestra aplicación disponible tanto para Android como para IOS.'
            />
            <Us 
                edit={props.edit} 

                />
            <News 
                edit={props.edit}
            />
        </div>
    )
}
