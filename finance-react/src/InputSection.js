import React, { useState } from 'react';
import {NewPurchase} from './newPurchase.js';
import {Purchase} from './Purchase.js';
import {Income} from './Income.js';
import { NewIncome } from './newIncome.js';

import {useSelector, useDispatch} from 'react-redux';
import {loadUserPurchases, loadUserIncome, startDeletingPurchase, startDeletingIncome} from './actions';

export function InputSection(props){

  let user = "";
  const purchases = useSelector(state => state.purchases);
  const income = useSelector(state => state.income);
  const dispatch = useDispatch();

    

    React.useEffect(() => { 
    user = props.user;

    dispatch(loadUserPurchases(user));
    dispatch(loadUserIncome(user));

    props.pur(purchases.reduce((totalPurchases, purchase) => totalPurchases + purchase.amount, 0));
    props.inc(income.reduce((totalIncome, inc) => totalIncome + inc.amount, 0))
     
  })

  
    const deletePurchase = name => {
      if(user.length > 0) {
        dispatch(startDeletingPurchase(name))
      } else {
        alert("Log on to your personal username before deleting purchases")
      }
     }

     const deleteIncome = name => {
      if(user.length > 0) {
        dispatch(startDeletingIncome(name))
      } else {
        alert("Log on to your personal username before deleting purchases")
      }
     }


  return(
    <div id ="inputBox">
      <div id="incomeBox">
        <p className="boxHeader">Incomes</p>
        <NewIncome user = {props.user}/>
  {/*income.map(income => <Income  key={income.id} income = {income} deleteIncome = {deleteIncome}/>)*/}
      </div>
      <div id="purchasesBox">
        <p className="boxHeader">Purchases</p>
        <NewPurchase user = {props.user}/>
  {purchases.map(purchase => <Purchase  key={purchase.id} purchase = {purchase} deletePurchase = {deletePurchase}/>)};
      </div>
      </div>
  );
}

