import React from 'react';

import '../Css/Post.css';


function Post(props){
    return(
        <div className="Post">
            <h1>{props.title}</h1>
            
            <p>{props.text}</p>
        </div>
    );
}

export default Post;