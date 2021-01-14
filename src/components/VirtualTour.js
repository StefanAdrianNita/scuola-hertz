/***** React library *****/
import React from 'react';

/***** Style *****/
import "../Css/VirtualTour.css";


function VirtualTour(){
    return(
       <div className="VirtualTour">
           <div className="Tour">
           <iframe src="https://stefanadriannita.github.io/hertz-virtual-tour/"></iframe>
            </div>
        </div>
);
}
export default VirtualTour;