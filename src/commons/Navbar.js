import React from 'react';
import "../Css/Navbar.css";
import logo from '../media/logo.png';
import {Link} from 'react-router-dom';



function Navbar (){
        return(
            <div className="Navbar">
                <div className="Navbar__logo">
                    <img src={logo}></img>

                </div>
                <div className="Navbar__item">
                    <Link to="/">
                        <a href="" className="Navbar__button">Home</a>
                    </Link>
                    <Link to="/About">
                        <a href=""className="Navbar__button">About</a>
                    </Link>
                    <Link to="/Contact">
                        <a href="contatti.html" className="Navbar__button">Contatti</a>
                    </Link>
                    
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