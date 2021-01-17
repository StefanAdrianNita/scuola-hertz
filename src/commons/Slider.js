/***** React library *****/
import React from 'react';

/***** Style *****/
import "../Css/Slider.css";

/***** Media *****/
import img1 from "../media/(Slider)1.jpg";
import img2 from "../media/(Slider)2.jpg";
import Arrow_Right from "../media/Slider_Arrow_Right.png";
import Arrow_Left from "../media/Slider_Arrow_Left.png";

function oncCLick(){

    
        
}

function Slider(props){
    return(
        <div className="Slider">
            <div className="slides-images">
                <button className="btn-left" id="button-left" onClick={onCLick}><img src={Arrow_Left}></img></button>
                <button className="btn-right" id="button-right" onClick={onCLick}><img src={Arrow_Right}></img></button>
                <img src={img1}></img>
                <img src={img2}></img>
            </div>
                
        </div>
    );
}
export default Slider;