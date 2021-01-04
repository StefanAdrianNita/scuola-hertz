import React from 'react';
import "../Css/Navbar.css";
import logo from '../media/Logo.png';
import {Link} from 'react-router-dom';

import Button from '../commons/Button';

const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

function showMenu(){
btn.addEventListener('click' , (error,nav) => {
    nav.classList.toggle('active')
})
}


function Navbar (){
        return(
            <div className="Navbar">
                <div className="Navbar__logo">
                    <img src={logo}></img>

                </div>
                <div className="Navbar__item" id="nav">
                    <ul className="Navbar__menu">
                        <Link to="/Contact">
                            <li  className="menu__button">Contact</li>
                        </Link>
                        <Link to="/About">
                            <li className="menu__button">About</li>
                        </Link>
                        <Link to="/">
                            <li className="menu__button">Home</li>
                        </Link>
                        <Link to="/VirtualTour">
                            <li className="menu__button" id="Navbar-button-responsive">Virtual Tour</li>
                        </Link>
                    </ul>  
                </div>
                <div className="Navbar__cta">
                    <Link to="/VirtualTour">
                        <a href=""className="cta">Virtual Tour</a>
                    </Link>
                    
                </div>
                <div className="Button-responsive">
                    <button className="btn-responsive" id="btn" onClick={showMenu}>≡</button>
                </div>
            </div>
                );
}

export default Navbar;