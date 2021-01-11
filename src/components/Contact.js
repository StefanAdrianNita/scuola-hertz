import React from 'react';
import "../Css/Contact.css";

/************ Media *************/
import Header from '../media/(Contact)Header.jpg'


/************ Common ****************/
import Map from '../commons/Map'
import MailForm from '../commons/MailForm'

const MapInfo="Il bacino di utenza dell’Istituto è assai ampio e composito, grazie anche ai buoni collegamenti tramite mezzi pubblici, linea A e linea C della metropolitana e della stazione dei pullman extraurbani."
const mailDeVincenzi="francescodevincenzi@iisenzoferrari.it";
    const mailDeLuca="marcodeluca@iisenzoferrari.it";
    const mailMarongiu="manuel.marongiu.s@iisenzoferrari.it";
    const mailNita="stefanadrian.nita.s@iisenzoferrari.it";


function Contact(){
    return(
        <div className="Contact">
            <div className="Header__Contact">
                <div className="Header-Contact__post">
                    <h1>Contact Us</h1>
                </div>
                <img src={Header}></img>
            </div>
            <br></br>
            <br></br>
            <div className="Module__container">
                <div className="Contact__container">
                    <div className="contact">
                        <ul>
                            <h1>Contatti</h1>
                            <li>Tel. 06-121122805</li>
                            <li>Fax. 06-7211555</li>
                            <li>{mailDeVincenzi}</li>
                            <li>{mailDeLuca}</li>
                            <li>{mailMarongiu}</li>
                            <li>{mailNita}</li>
                        </ul>
                    </div>
                </div>
                <div className="Mail__form">
                    <MailForm></MailForm>

                </div>
            </div>
            <br></br>
            <br></br>
            <div className="Map__container">
                <div className="Map__post">
                    <h1>Come Raggiungerci</h1>
                    <div className="post">
                        <p>{MapInfo}</p>
                    </div>
                </div>
                <div className="Map">
                    <Map></Map>
                </div>
            </div>  
        </div>
    );
}

export default Contact;