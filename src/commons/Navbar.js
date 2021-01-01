import React from 'react';
import "../Css/Navbar.css";
import logo from '../media/logo.png';
import {Link} from 'react-router-dom';

const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

function showMenu(){
btn.addEventListener('click' , () => {
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
                    <Link to="/">
                        <a href="" className="Navbar__button">Home</a>
                    </Link>
                    <Link to="/About">
                        <a href=""className="Navbar__button">About</a>
                    </Link>
                    <Link to="/Contact">
                        <a href="" className="Navbar__button">Contatti</a>
                    </Link>
                    <Link to="/VirtualTour">
                        <a href="" className="Navbar__button" id="Navbar-button-responsive">Virtual Tour</a>
                    </Link>
                    
                </div>
                <div className="Navbar__cta">
                    <Link to="/VirtualTour">
                        <a href="" className="cta">Virtual Tour</a>
                    </Link>
                    
                </div>
                <div className="Button-responsive">
                    <button className="btn-responsive" id="btn">≡</button>
                </div>
            </div>
                );
}

export default Navbar;