import React from "react";

export default () => {
    
    return (
        <div key={props.id}>
        <h2>{props.name}</h2>
        <h4>{props.price}</h4>
        <p>{props.description}</p>
        </div>
    );
};



