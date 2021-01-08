import React from 'react';
import "../Css/Cards.css";
function Cards(props){
    return(
        <div className="Container">
            <div className="Photo">
                <img src={props.photo}></img>
            </div>
            <div className="Credentials">
                <h1 className="Named">{props.name}</h1>
                <h1 className="Named">{props.surname}</h1>
            </div>
            <div className="Description">
                <p>{props.text}</p>
            </div>
        </div>

    );

}


export default Cards;