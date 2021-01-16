/***** React library *****/
import React, {useEffect}from 'react';
import {Link} from 'react-router-dom';

/***** Style *****/
import "../Css/Home.css";

/*************** Media ****************/
import IMG1Slider from '../media/(Slider)1.jpg';
import IMG2Slider from '../media/(Slider)2.jpg';
import HomeBG from '../media/HomeBG.jpg';
import Avatar from '../media/AvatarCard.png';

/***** Components *****/
import Button from '../commons/Button';
import Cards from '../commons/Cards';
import Slider from '../commons/Slider';
    
const postTitle="Hertz Virtual Tour";
const post="Prova l'esperienza dell'open day da casa tua!"
const postLink="Virtual Tour";
const aboutMarongiu="Nato il 04/12/2000, studente di informatica all'Hertz dal 2015";
const aboutNita="Nato il 21/06/2002 studente di informatica all'Hertz dal 2016";
    
function Home(){
    return(
        <div className="Home">
            <div className="Header__home">
                <div className="Header__colored">
                    <div className="Header__post">
                        <h1>{postTitle}</h1>
                        <p>{post}</p>
                        <div className="post__button">
                        <Link to="/VirtualTour">
                            <Button text={postLink} ></Button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="Header__photo">
                    <img src={HomeBG}></img>
                </div>
            </div>
            <br></br>
            <Slider></Slider>
            <br></br>
            <div className="Cards">
                <div className="Cards__card">
                    <Cards photo={Avatar} name="Manuel" surname="Marongiu" text={aboutMarongiu}></Cards>
                    <Cards photo={Avatar} name="Adrian" surname ="Nita" text={aboutNita}></Cards>
                </div>
            </div>
        </div>
    );
}
export default Home;