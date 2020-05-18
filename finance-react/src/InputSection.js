import React from 'react';
import {NewPurchase} from './newPurchase.js';
import {Purchase} from './Purchase.js';
import {Income} from './Income.js';
import {NewIncome} from './newIncome.js';

import {useSelector, useDispatch} from 'react-redux';
import {loadUserPurchases, startDeletingPurchase} from './actions';

export function InputSection(props){

  let user = "";
  const transactions = useSelector(state => state.purchases);
  const income = transactions.filter(purchase => purchase.amount > 0);
  const purchases = transactions.filter(purchase => purchase.amount < 0)
  const dispatch = useDispatch();

    

    React.useEffect(() => { 
      // eslint-disable-next-line
    user = props.user;
    dispatch(loadUserPurchases(user));
    props.pur(purchases.reduce((totalPurchases, purchase) => totalPurchases + purchase.amount, 0));
    props.inc(income.reduce((totalIncome, inc) => totalIncome + inc.amount, 0));
    
     
  })

  
    const deletePurchase = name => {
      if(user.length > 0) {
        dispatch(startDeletingPurchase(name))
        props.load();
      } else {
        alert("Log on to your personal username before deleting purchases")
      }
     }


  return(
    <div id ="inputBox">
      <div id="incomeBox">
        <p className="boxHeader">Incomes</p>
        <NewIncome user = {props.user} load = {props.load}/>
    
  {
  income.map(inc =><Income  key={inc.id} inc = {inc} deleteIncome = {deletePurchase}/>)   
  };
      </div>
      <div id="purchasesBox">
        <p className="boxHeader">Purchases</p>
        <NewPurchase user = {props.user} load = {props.load}/>
  {purchases.map(purchase => <Purchase  key={purchase.id} purchase = {purchase} deletePurchase = {deletePurchase}/>)};
      </div>
      </div>
  );
}

