import React, {useContext} from 'react';
import './css.css';
import {withRouter} from 'react-router';
import LanguageContext from "../../../../Context/index";

function Buttons(props) {
    
    const { history } = props ;
    const { texts } = useContext(LanguageContext);

    return (
        <div className={"buttons " + props.classButtons}>
            <button className="button transparent button-signup">{texts.BUTTON_REGISTER}</button>
            <button className="button white button-login"  onClick = {() =>  history.push('/Login')}>{texts.BUTTON_LOGIN}</button>
        </div>
    )
}

export default withRouter(Buttons) ;
