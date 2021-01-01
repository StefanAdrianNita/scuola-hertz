import React from 'react';
import {Link} from 'react-router-dom';
import "../Css/Home.css";
/***************Header ***************/
import HomeBGColored from '../media/HomeBGColored.jpg';
import HomeBG from '../media/HomeBG.jpg';
/*************************************/
/***************Cards****************/
import DeVincenziIMG from '../media/DeVincenziIMG.png';
import MarongiuIMG from '../media/MarongiuIMG.JPG';
import NitaIMG from '../media/NitaIMG.jpg';


/***********************************/
import Post from '../commons/Post';
import Button from '../commons/Button';
import Cards from '../commons/Cards';
function Home(){

    const postTitle="Hertz Virtual Tour";
    const post="Prova l'esperienza dell'open day da casa tua!"
    const postLink="Virtual Tour";


    const aboutDevincenzi="Professore di Informatica ed esperto Musicale, insegnante da .. anni nell'istituto H.Hertz"
    return(
        <div className="Home">
            <div className="Header">
                <div className="Header__colored">
                    <div className="Header__post">
                        <h1>{postTitle}</h1>
                        <p>{post}</p>
                        <div className="post__button">
                        <Link to="/VirtualTour">
                            <Button text={postLink}></Button>
                        </Link>
                        </div>
                    </div>
                    <img src={HomeBGColored}></img>
                </div>
                <div className="Header__photo">
                    <img src={HomeBG}></img>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        <div className="Cards">
            <Cards photo={DeVincenziIMG} text={aboutDevincenzi}></Cards>
            <Cards></Cards>
            <Cards photo={MarongiuIMG}></Cards>
            <Cards photo={NitaIMG}></Cards>
        </div>
        </div>

        );
    }

export default Home;