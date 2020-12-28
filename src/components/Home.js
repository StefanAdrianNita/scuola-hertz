import React from 'react';
import "../Css/Home.css"
import Hero from '../media/Home__Hero.jpg';
import Post from '../commons/Post';


function Home(){

    const about="Siamo un Team di studenti dell'istituto superiore H.Hertz che ha voluto realizzare, in seguito ai recenti avvenimenti, una Web-App in grado di trasportare Alunni e Genitori all'interno del nostro istituto, per poter visitare la scuola con le opportune precauzioni! ";
    return(
        <div className="Home">
            <div className="Header">
                <div className="Hero">
                    <img src={Hero}></img>
                </div>
            </div>
            <br></br>
            <br></br>
        <div className="Posts">
            <Post title="Chi siamo" text={about}></Post>
        </div>
        </div>

    );
}

export default Home;