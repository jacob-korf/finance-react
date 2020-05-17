import React, { useState } from 'react';
import {NewPurchase} from './newPurchase.js';
import {Purchase} from './Purchase.js';
import {Income} from './Income.js';
import { NewIncome } from './newIncome.js';

import {useSelector, useDispatch} from 'react-redux';
import {loadUserPurchases} from './actions';

const initialPurchases = [
{description: "Groceries", amount: "400"},
{description: "Gas", amount: "10"},
{description: "Car repair", amount: "$00"},
{description: "Rent", amount: "350"},
];

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

    const onLoad = () => {
      dispatch(loadUserPurchases(user))
    }

    function submitUsername(){
      user = props.user;
      onLoad.call();
    }
    const [usern, setUsern] = useState("");



    React.useEffect(() => { 
    user = props.user;
    dispatch(loadUserPurchases(user));
     })

    const [income, setIncome] = useState(initialIncome);
   {/* const deletePurchase = name => {
        setPurchases(purchases => purchases.filter(purchases => purchases.description !== name));
    }
    
    const [purchases, setPurchases] = useState(initialPurchases);
     user = props.user;
  dispatch(loadUserPurchases(user));
setPurchases(pur)

React.useEffect(() => { alert("Your file is being uploaded!");
user = props.user;
dispatch(loadUserPurchases(user));
setPurchases(pur);
 }, [userna])
    const addPurchase = name => {
        setPurchases(purchases => [name, ...purchases])
    }
    
       <NewPurchase user = {props.user}/>*/
    }
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
        <p className="boxHeader">Incomes {props.user}</p>
        <NewIncome add = {addIncome}/>
        {income.map(inc => <Income key = {inc} inc = {inc} deleteIncome = {deleteIncome}/>)};
      </div>
      <div id="purchasesBox">
        <p className="boxHeader">Purchases</p>
  {purchases.map(purchase => <Purchase  key={purchase.id} purchase = {purchase}/>)};
      </div>
      </div>
  );
}

