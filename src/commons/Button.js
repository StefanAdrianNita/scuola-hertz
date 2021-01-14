/***** React library *****/
import React,  {useClick}from 'react';

/***** Style *****/
import '../Css/Button.css';

function Button(props){
    return(
        <div>
            <button className="Button">
                <h6 className="Button__text">{props.text}</h6>
            </button>
            </div>
    );
}
export default Button;