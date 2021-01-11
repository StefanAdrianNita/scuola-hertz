import React from 'react';
import "../Css/MailForm.css";

import MailIMG from '../media/MailIMG.png';


function MailForm(){
    return(
        <div className="MailForm">
            <div className="Mail__Container">
                <div className="Image">
                    <img src={MailIMG}></img>
                </div>
                <div className="mail">
                    <form>
                        <div className="Name">
                            <input type="text" className="Form__field" placeholder="Nome"></input>
                        </div>
                        <div className="Surname">
                            <input type="text" className="Form__field" placeholder="Cognome"></input>
                        </div>
                        <div className="Email">
                            <input type="email" className="Form__field" placeholder="E-mail"></input>
                        </div>
                        <div className="Object">
                            <input type="Text" className="Form__field" placeholder="Oggetto"></input>
                        </div>
                        <div className="Text">
                            <textarea className="Form__field" id="text" placeholder="Testo"></textarea>
                        </div>
                        <div className="Submit">
                            <input type="submit" className="Form__field" id="Submit" value ="Invia"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MailForm;