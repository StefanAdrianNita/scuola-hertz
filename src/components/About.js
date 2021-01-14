/***** React library *****/
import React from 'react';
import {Link} from 'react-router-dom';

/***** Style *****/
import "../Css/About.css";

/***** Media *****/
import HeaderImage from '../media/(About)HeaderImage.jpg'
import SchoolImage from '../media/(About)School.jpg';

/***** Component *****/
import Button from '../commons/Button';

const SchoolInfo="L’Istituto Tecnico Industriale Statale Hertz è un Istituto Secondario Superiore Statale finalizzato alla formazione di Tecnici per l’industria ed il settore terziario, specializzati nell’area dell’informatica, dell’elettronica, delle biotecnologie e della meccatronica.L’Istituto, attento ai mutamenti del mercato del lavoro e delle esigenze dei ragazzi, è aperto al territorio e alle istanze dell’utenza con iniziative diversificate in ambito professionale culturale e sportivo. Si conseguono le certificazioni europee EIPASS, CISCO Networking Academy Program, ECDL (Patente Europea per il Computer), TRINITY (per le competenze di lingua inglese), stage di approfondimento della lingua inglese all’estero, stage aziendali.";
const ProjectInfo="Il progetto Virtual Tour, nasce dall'esigenza di portare le famiglie, alla visita guidata della nostra scuola. In seguito ai recenti avvenimenti che hanno caratterizzato le vite di tutti noi Italiani, i ragazzi dell'Hertz insieme ai Professori, Francesco DeVincenzi e Marco DeLuca hanno voluto poter comunque concedere, ai ragazzi provenienti dalle Scuole Medie, l'opportunità di poter visitare un possibile luogo di crescita personale e di apprendimento, che li trasporterà in un'ambiente di lavoro divertente e formativo, buona visione!";
const TeacherInfo="Nella nostra scuola, è presente un numeroso Team di Docenti altamente qualificati e pronti ad aiutare gli alunni in qualsiasi circostanza. All'interno dell'istituto è presente anche uno psicologo specializzato a disposizione dei ragazzi.È possibile inoltre frequentare vari corsi: Robotica,Informatica Musicale etc.. gestiti dai nostri Docenti nelle ore extra-pomeridiane.";

function About(){
    return(
        <div className="About">
            <div className="Header__About">
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
            <br></br>
            <br></br>
            <br></br>
            <div className="Project__section">
                <div className="Project__info">
                    <h1>Il Progetto Virtual Tour</h1>
                    <p>{ProjectInfo}</p>
                    <div className="vt-btn">
                        <Link to="/VirtualTour">
                            <Button text="Try Virtual Tour"></Button>
                        </Link>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="Teacher__section">
                <div className="Teacher">
                    <h1>I nostri Insegnanti</h1>
                    <p>{TeacherInfo}</p>
                    <div className="teacher-btn">
                        <Link to="/Teacher">
                            <Button text="I nostri Professori"></Button>
                        </Link>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
export default About;