import React, { useState } from 'react';
import {NewPurchase} from './newPurchase.js';
import {Purchase} from './Purchase.js';
import {Income} from './Income.js';
import { NewIncome } from './newIncome.js';

import {useSelector, useDispatch} from 'react-redux';
import {loadUserPurchases} from './actions';

const initialIncome = [
{desc: "Weekly Deposit", value: "$400"},
{desc: "lol", value: "$400"},
{desc: "Baled Hay", value: "$100"},
{desc: "Sold car", value: "$350"},
];
export function InputSection(props){

  let user = "";
  const purchases = useSelector(state => state.purchases);
  const dispatch = useDispatch();

    
    const [usern, setUsern] = useState("");

    React.useEffect(() => { 
    user = props.user;
    dispatch(loadUserPurchases(user));
     })

    const [income, setIncome] = useState(initialIncome);
  
    const deletePurchase = "";

    const deleteIncome = name => {
        setIncome(income => income.filter(income => income.description !== name));
    }
    const addIncome = name => {
        setIncome(income => [name, ...income])
    }
  return(
    <div id ="inputBox">
      <div id="incomeBox">
        <p className="boxHeader">Incomes</p>
        <NewIncome add = {addIncome}/>
        {income.map(inc => <Income key = {inc} inc = {inc} deleteIncome = {deleteIncome}/>)};
      </div>
      <div id="purchasesBox">
        <p className="boxHeader">Purchases</p>
        <NewPurchase user = {props.user}/>
  {purchases.map(purchase => <Purchase  key={purchase.id} purchase = {purchase}/>)};
      </div>
      </div>
  );
}

