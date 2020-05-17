import React from 'react';
export function Income(props) {
    const inc = props.inc;
    return (
        <div className="purchase">
            <p id = "purchaseText">
            <span className = "deleteIncome" onClick= {() => props.deleteIncome(inc.id)}>&#x2716; </span>
               <b>Purchase:</b> {inc.description}  ${inc.amount}
            </p>
        </div>
    );
} 