import React from 'react'
import './css.css'

export default function Buttons(props) {
    return (
        <div className={"buttons " + props.classButtons}>
            <button className="button transparent button-signup">REGISTRARSE</button>
            <button className="button white button-login">INICIAR SESIÓN</button>
        </div>
    )
}
