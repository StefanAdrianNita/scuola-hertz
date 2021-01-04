import React from 'react';
import "../Css/Slider.css";

function Slider(props){
    return(
        <div className="Slider">
            <div className="slider">
                <div className="slide">
                    <img src={props.img1}></img>
                    <img src={props.img2}></img>
                </div>
            </div>
        </div> 
    );
}

export default Slider;