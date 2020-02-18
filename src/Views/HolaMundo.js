import React from 'react';
import Button from '@material-ui/core/Button';
import HolaController2 from '../Controller/HolaController';



function HolaMundo(){

    return(
        <Button onClick = {()=> HolaController2()}>Hola Mundo</Button>
    );


}

export default HolaMundo;