import React from 'react';
import './Purchase.css';
export function Purchase(props) {
   /* const purch = props.purch;
    return (
        <div>
        <p className= "paragraphText" >
            <span className = "deletePurchase" onClick= {() => props.deletePurchase(purch.desc)}>&#x2716; </span>
             <b>Value:</b> {purch.value} <b>Description: </b>{purch.desc} </p>
        </div>
    );*/
    const purchase = props.purchase;

    return (
        <div className="purchase">
            <p id = "purchaseText">
               <b>Purchase :</b> {purchase.description}  ${purchase.amount}
            </p>
        </div>
    )
} 