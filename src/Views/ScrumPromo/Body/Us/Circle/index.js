import React, {useState} from 'react';
import './css.css';

export default function Circle(props) {    
    const [see, setSee] = useState(false);
    const onClick = () => setSee(!see);

    const [data, setData] = useState(props);

    const handleDefaultProps = () => {
        setData(props)
    }

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        setData({...data, [name]: target.value})
    }

    const handleInputSocialChange = (e) => {
        const target = e.target;
        const name = target.name;
        setData(
            {...data, social: {
                ...data.social, [name]:{
                    ...data.social[name], url:target.value
                }
            }
        })
    }

    const handleInputTypeSocialChange = (e) => {
        const target = e.target;
        const name = target.name;
        setData(
            {...data, social: {
                ...data.social, [name]:{
                    ...data.social[name], red:target.value
                }
            }
        })
    }

    const handleClickCancel = () => {
        handleDefaultProps();
    }

        const redes = []; //div

        const pushRed = (id, url, red) => {
            if(props.edit)
            redes.push(
                <div key={id} className="red-content-edit">
                    <input 
                    type="text" 
                    name={id} 
                    value={data.social[id].url} 
                    onChange={handleInputSocialChange}
                    className="red-input-edit"
                    placeholder="URL"
                    />
                    <select className="red-select-edit" 
                        value={data.social[id].red}
                        name={id}
                        onChange={handleInputTypeSocialChange}
                    >
                        <option value="none">Vacío</option>
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="linkedin">Linkedin</option>
                        <option value="github">Github</option>
                        <option value="mail">E-mail</option>
                        <option value="twitter">Twitter</option>
                        <option value="whatsapp">Whatsapp</option>
                    </select>
                </div>
            )
            else if(red !== 'none')
                redes.push(
                    <a key={id} className="social-item" href={url} rel="noopener noreferrer" target="_blank">
                        <span className={`icon-${red}`}></span>
                    </a>
                )
        }

        props.social.forEach(red => {
                pushRed(red.id, red.url, red.red);
        });
        

    if(props.edit)
        return(
            <div className="circle show circle-edit">
                <div>
                    <button className="button save-member">GUARDAR</button>
                    <button className="button save-member" onClick={handleClickCancel}>CANCELAR</button>
                </div>
                <button className="button edit-img-member">Editar imagen</button>
                <img className="img-member" 
                src={props.img} 
                alt="Imágen del integrante"
                />
                <div className="info-member"
                    data-aos="fade-down" 
                    data-aos-offset="-200"
                    data-aos-duration="500">
                    <input 
                    type="text" 
                    name="name" 
                    onChange={handleInputChange} 
                    value={data.name} 
                    className="name name-edit"
                    placeholder="Nombre y Apellido"
                    />
                    <input 
                    type="text" 
                    name="position" 
                    onChange={handleInputChange} 
                    value={data.position} 
                    className="position position-edit"
                    placeholder="Posicion"
                    />
                    <div className="social-edit">
                        {redes}
                    </div>
                </div>
            </div>
        )
    
    if(see)
        return (
            <div className="circle show" onClick={onClick}>
                <img className="img-member" src={props.img} alt="Imágen del integrante"/>
                <div className="info-member"
                    data-aos="fade-down" 
                    data-aos-offset="-200"
                    data-aos-duration="500">
                    <p className="name">{props.name}</p>
                    <p className="position">{props.position}</p>
                    <div className="social">
                        {redes}
                    </div>
                </div>
            </div>
        )
    else
        return(
            <div className="circle" onClick={onClick}>
                <img className="img-member" src={props.img} alt="Imágen del integrante"/>
            </div>
        )
}
