/***** React library *****/
import React from 'react';

/***** Style *****/
import "../Css/Slider.css";

function Slider(props){
    return(
        <div className="Slider">
            <div className="slide-images">
                <div className="img-slide">
                    <img src={props.img1}></img>
                </div>
                <div className="img-slide">
                    <img src={props.img2}></img>
                </div>
            </div>
        </div> 
    );
}
export default Slider;