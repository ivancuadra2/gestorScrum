import React, {useState} from 'react';
import './css.css';
import AppStore from './AppStore';
import PlayStore from './PlayStore';
import img from './img.png';

export default function Stores({edit, title, text}) {

    const [data, setData] = useState({title, text});

    const handleDefaultProps = () => {
        setData({title, text});
    }

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        setData({...data, [name]: target.value});
    }

    const handleClickCancel = () => {
        handleDefaultProps();
    }


    if(edit)
    return (
        <section className="content-width content-section"
            data-aos="fade-left" 
            data-aos-offset="300"
            data-aos-duration="1000" 
            >
            <div className="content-description">
                <button className = "button">GUARDAR SECCIÓN</button>
                <button className = "button" onClick = {handleClickCancel}>CANCELAR</button>

                <textarea 
                    type = 'text'
                    name = 'title'
                    onChange = {handleInputChange}
                    value = {data.title}
                    className ="textarea"
                />
                <textarea 
                    type = 'text'
                    name = 'text'
                    onChange = {handleInputChange}
                    value = {data.text}
                    className ="textarea"
                />
                

                <AppStore />
                <PlayStore />
            </div>
            <img src={img} alt="IOS y ANDROID" className="phones"/>
        </section>
    )


    else
    return (
        <section className="content-width content-section"
            data-aos="fade-left" 
            data-aos-offset="300"
            data-aos-duration="1000" 
            >
            <div className="content-description">
                <h2>{title}</h2>
                <p>{text}</p>
                <AppStore />
                <PlayStore />
            </div>
            <img src={img} alt="IOS y ANDROID" className="phones"/>
        </section>
    )
}
