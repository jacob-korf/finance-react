import React from 'react';
export function Purchase(props) {
    const purch = props.purch;
    return (
        <div>
        <p className= "paragraphText" >
            <span className = "deletePurchase" onClick= {() => props.deletePurchase(purch.desc)}>&#x2716; </span>
             <b>Value:</b> {purch.value} <b>Description: </b>{purch.desc} </p>
        </div>
    );
} 