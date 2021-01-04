import React from 'react';

import {Links} from 'react-router-dom';

import "../Css/About.css";
import HeaderImage from '../media/(About)HeaderImage.jpg'
import SchoolImage from '../media/(About)School.jpg';


const SchoolInfo="L’Istituto Tecnico Industriale Statale Hertz è un Istituto Secondario Superiore Statale finalizzato alla formazione di Tecnici per l’industria ed il settore terziario, specializzati nell’area dell’informatica, dell’elettronica, delle biotecnologie e della meccatronica.L’Istituto, attento ai mutamenti del mercato del lavoro e delle esigenze dei ragazzi, è aperto al territorio e alle istanze dell’utenza con iniziative diversificate in ambito professionale culturale e sportivo. Si conseguono le certificazioni europee EIPASS, CISCO Networking Academy Program, ECDL (Patente Europea per il Computer), TRINITY (per le competenze di lingua inglese), stage di approfondimento della lingua inglese all’estero, stage aziendali.";


function About(){
    return(
        <div className="About">
            <div className="Header">
                <div className="Header__Image">
                    <img src={HeaderImage}></img>
                    <h1 className="Image__content">About us</h1>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="School__section">
                <div className="School__info">
                    <p>{SchoolInfo}</p>
                </div>
                <div className="School__image">
                    <img src={SchoolImage}></img>
                </div>
            </div>
            <div className="Teacher__section">
                <div className="Teacher">
                    hello
                </div>
            </div>
        </div>
    );
}

export default About;