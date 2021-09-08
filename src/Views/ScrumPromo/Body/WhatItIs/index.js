import React, {useState, useContext} from 'react'
import LanguageContext from '../../../../Context/index';
import './css.css';
import { Element } from 'react-scroll';
import SvgTeam from './SvgTeam';

export default function WhatIsIt({edit, title, subtitle, subtitle2, text, text2}) {

    const [data, setData] = useState({title, subtitle, subtitle2, text, text2});

    const handleDefaultProps = () => {
        setData({title, subtitle, subtitle2, text, text2})
    }

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        setData({...data, [name]: target.value})
    }

    const handleClickCancel = () => {
        handleDefaultProps();
    }

    const { texts } = useContext(LanguageContext);
    if(edit)
    return(
        <Element name="WhatItIs" className="content-section" 
            data-aos="fade-left" 
            data-aos-offset="300"
            data-aos-duration="1000" >
            <div className="content-width">
                    <div className= "title">
                        <input 
                        type="text" 
                        name="title" 
                        onChange={handleInputChange} 
                        value={data.title} 
                        />
                    </div> 
                        <button className="button">{texts.BUTTON_SAVE} </button>
                        <button className="button" onClick={handleClickCancel}>{texts.BUTTON_CANCEL}</button>
                        <div className= "displayFlex">
                            <div className = "displayColumn" >
                                <input 
                                type="text" 
                                name="subtitle" 
                                onChange={handleInputChange} 
                                value={data.subtitle} 
                                className="subtitle"
                                />
                                <textarea 
                                type="text" 
                                name="text" 
                                onChange={handleInputChange} 
                                value={data.text} 
                                className="textarea"
                                />
                                <input 
                                type="text" 
                                name="subtitle2" 
                                onChange={handleInputChange} 
                                value={data.subtitle2} 
                                className="subtitle"
                                />
                                <textarea 
                                type="text" 
                                name="text2" 
                                onChange={handleInputChange} 
                                value={data.text2} 
                                className="textarea"
                                />
                            </div>
                        <div className="displayColumn">
                            <SvgTeam />
                        </div>
                    </div>
            </div>
        </Element>
    )
    else
    return (
        <Element name="WhatItIs" className="content-section" 
            data-aos="fade-left" 
            data-aos-offset="300"
            data-aos-duration="1000" >
            <div className="content-width">
                    <div className= "title">
                        <h2>{title}</h2>
                    </div> 
                        <div className= "displayFlex">
                            <div className = "displayColumn" >
                                <h3 className="subtitle">{subtitle}</h3>
                                <p>{text}</p>
                                <h3 className="subtitle">{subtitle2}</h3>
                                <p>{text2}</p>
                            </div>
                        <div className="displayColumn">
                            <SvgTeam />
                        </div>
                    </div>
            </div>
        </Element>
    )
}
