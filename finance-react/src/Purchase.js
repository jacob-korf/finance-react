import React from 'react';
import './Purchase.css';

export function Purchase(props) {
    const purchase = props.purchase;

    return (
        <div className="purchase">
            <p id = "purchaseText">
               <b>Purchase {purchase.id}:</b> {purchase.description}  ${purchase.amount}
            </p>
        </div>
    )
}

//{purchase.username}