import React from 'react';
import {Links} from 'react-router-dom';
import "../Css/About.css";
import HeaderImage from '../media/HeaderImage.jpg'

function About(){


    const SchoolDescription="L'Istituto tecnico industriale Hertz è’ nato nel 1980 ed è situato nella zona compresa tra Cinecittà Est e il Grande Raccordo Anulare oggi ampiamente mutata rispetto ad allora."
    return(
        <div className="About">
            <div className="Header">
                <div className="Header__Image">
                    <img src={HeaderImage}></img>
                    <h1 className="Image__content">About us</h1>
                </div>
            </div>
            <div className="School__section">
                <div className="School__description">
                   {SchoolDescription}
                </div>
                <div className="School__image">

                </div>
            </div>
        </div>
    );
}

export default About;