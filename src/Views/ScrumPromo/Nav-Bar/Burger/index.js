import React, {useState} from 'react'
import './css.css'

export default function Burger(props) {
    const [classBurger, setClassBurger] = useState('');

    
    const onClickBurger = () => {
        if(classBurger === '') 
            setClassBurger('toggle');
        else
            setClassBurger('');
        props.onClickBurger();
        }

    return (
        <div className={"burger " + classBurger} onClick={onClickBurger}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    )
}
