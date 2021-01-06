import React from 'react';
import "../Css/Navbar.css";
import logo from '../media/logo.png';
import {Link} from 'react-router-dom';


function onClickMenu(){
    if(document.getElementById("menu").style.display == "block")
        document.getElementById("menu").style.display ="none";
    else
        document.getElementById("menu").style.display ="block";
}


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
                    </ul>  
                </div>
                <div className="Navbar__cta">
                    <Link to="/VirtualTour">
                        <a href=""className="cta">Virtual Tour</a>
                    </Link>
                </div>
                <div className="menu-responsive"  onClick={onClickMenu}>≡</div>
                <div className="menu" id="menu">
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/About">
                            <li>About us</li>
                        </Link>
                        <Link to="/Contact">
                            <li>Contact us</li>
                        </Link>
                        <Link to="/VirtualTour">
                            <li>Virtual Tour</li>
                        </Link>
                    </ul>
                </div>
                
            
            </div>
                );
}

export default Navbar;