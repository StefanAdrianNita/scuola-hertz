import React from 'react';
import {Links} from 'react-router-dom';
import "../Css/About.css";
import HeaderImage from '../media/HeaderImage.jpg'

function About(){
    return(
        <div className="Header">
            <div className="Header__Image">
                <img src={HeaderImage}></img>
                <h1 className="Image__content">About us</h1>
            </div>
            <div className=""></div>
        </div>
    );
}

export default About;