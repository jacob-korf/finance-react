import React from 'react';
import './Purchase.css';
export function Purchase(props) {
   
    const purchase = props.purchase;

    return (
        <div className="purchase">
            <p id = "purchaseText">
            <span className = "deletePurchase" onClick= {() => props.deletePurchase(purchase.id)}>&#x2716; </span>
               <b>Purchase:</b> {purchase.description}  ${purchase.amount}
            </p>
        </div>
    )
} 