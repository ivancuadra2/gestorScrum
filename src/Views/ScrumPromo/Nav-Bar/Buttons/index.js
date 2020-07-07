import React from 'react';
import './css.css';
import {withRouter} from 'react-router';
import  Storage from '../../../../Repository/Storage'

function Buttons(props) {
    
    const { history } = props ;
    

    return (
        <div className={"buttons " + props.classButtons}>
            <button className="button transparent button-signup">REGISTRARSE</button>
            <button className="button white button-login"  onClick = {() =>  history.push('/Login')}>INICIAR SESIÓN</button>
        </div>
    )
}

export default withRouter(Buttons) ;
