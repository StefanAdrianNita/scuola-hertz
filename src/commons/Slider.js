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
                <img src={img1}></img>
                <img src={img2}></img>
            </div>
                
        </div>
    );
}
export default Slider;