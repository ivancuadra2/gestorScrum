import React from 'react'
import './css.css';

export default function Footer() {
    return (
        <div className="footer background-svg">
            <div className="content-width content-footer">
                <div className="content-comenzar">
                    <h4 className="txt-comenza">¿Que estás esperando?</h4>
                    <button className="button white">COMENZAR A JUGAR</button>
                </div>

                <div className="footer-f">
                    <div className="copyright">&copy; 2020 - SCRUM Game</div>

                </div>
            </div>
        </div>
    )
}
