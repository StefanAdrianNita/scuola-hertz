import React from 'react';
import "../Css/Cards.css";
function Cards(props){
    return(
        <div className="Container">
            <div className="Photo">
                <img src={props.photo}></img>
            </div>
          <p className="About">{props.text}</p>
        </div>

    );

}


export default Cards;