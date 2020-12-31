import React from 'react';
import {Link} from 'react-router-dom';
import "../Css/Footer.css";
function Footer(){

    const mailDeVincenzi="francescodevincenzi@iisenzoferrari.it";
    const mailDeLuca="marcodeluca@iisenzoferrari.it";
    const mailMarongiu="manuel.marongiu.s@iisenzoferrari.it";
    const mailNita="stefanadrian.nita.s@iisenzoferrari.it";
    return(
        <footer className="Footer">
            <div className="Info">
                <div className="Contact">
                    <h1 id="Contact"> Contact</h1>
                    <div className="Contact__mail">
                        <div className="mail__prof">
                            <p id="Prof">Professori</p>
                            <p>{mailDeVincenzi}</p>
                            <p>{mailDeLuca}</p>
                        </div>
                        <div className="mail__student">
                            <p id="Student">Studenti</p>
                            <p>{mailMarongiu}</p>
                            <p>{mailNita}</p>

                        </div>
                    </div>
                </div>
                <div className="Links">
                    <h1 id="Links">Links</h1>
                    <Link to="/"><a href="">Homepage</a></Link>
                    <Link to="../components/About"><a href="">More about us</a></Link>
                    <Link to="../components/Contact"><a href="">Contact us</a></Link>
                    <Link to="../components/VirtualTour"><a href="">Try Virtual Tour</a></Link>
                </div>
            </div>
            <div className="copyright">

            </div>
        </footer>
    );
}
export default Footer;