import React from 'react';
import "../Css/Navbar.css";
import logo from '../media/logo.png';
import {Link} from 'react-router-dom';




function Navbar (){
        return(
            <div className="Navbar">
                <div className="Navbar__logo">
                    <Link to="/">
                        <img src={logo}></img>
                    </Link>
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
                    <input type="checkbox" name="" value="" id="check"></input>
                    <label for="check" className="Checkbtn">≡</label>
                </div>
            </div>
                );
}

export default Navbar;