import React from 'react';
export function Income(props) {
    const inc = props.inc;
    return (
        <div>
        <p className= "paragraphText" >
            <span className = "deleteIncome" onClick= {() => props.deleteIncome(inc.desc)}>&#x2716; </span>
             <b>Value:</b> {inc.value} <b>Description: </b>{inc.desc} </p>
        </div>
    );
} 