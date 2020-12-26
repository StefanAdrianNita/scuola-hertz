import React, { Component } from 'react';
import "../Css/Navbar.css";
import logo from '../media/logo.png';
import smallText from '../fonts/RobotoSlab-Light.ttf'

function Navbar (){
        return(
            <div className="Navbar">
                <div className="Navbar__logo">
                    <img src={logo}></img>

                </div>
                <div className="Navbar__item">
                    <a href="" className="Navbar__button">Home</a>
                    <a href="" className="Navbar__button">Contatti</a>
                </div>
                <div className="Navbar__cta">
                        <a href="" className="cta">Virtual Tour</a>
                </div>
                <label for="btn-menu" className="btn-responsive">≡</label>
                <input type="checkbox" id="btn-menu" role="button"></input>
            </div>
                );
}

export default Navbar;