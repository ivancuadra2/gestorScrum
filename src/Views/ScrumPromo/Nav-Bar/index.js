import React, {useState, useEffect} from 'react'
import './css.css';
import logo from './logo2.png'
import Buttons from './Buttons'
import Burger from './Burger'

export default function Nav() {
    const [visible, setVisible] = useState(window.scrollY > (window.innerHeight/2));

    const handleScroll = () => setVisible(window.scrollY > (window.innerHeight/2));

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
          }
    }, []);

    const [classButtons, setClassButtons] = useState('');

    const onClickBurger = () => {
        if(classButtons === '') {
            setClassButtons('toggle');
        }
        else{
            setClassButtons('');
        }
    }
    if(!visible) return null 
    else
        return (
            <div className="content-nav"
                data-aos="fade-down" 
                data-aos-duration="1000">
                <div className="content-width nav">
                    <img className="logo" src={logo} alt="SCRUM Game" />
                    <Buttons classButtons={classButtons} />
                    <Burger onClickBurger={onClickBurger} />
                </div>
            </div>
        )
}
