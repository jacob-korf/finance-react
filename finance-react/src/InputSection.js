import React, { useState } from 'react';
import {NewPurchase} from './newPurchase.js';
import {Purchase} from './Purchase.js';
import {Income} from './Income.js';
import { NewIncome } from './newIncome.js';

const initialPurchases = [
{desc: "Groceries", value: "$400"},
{desc: "Gas", value: "$10"},
{desc: "Car repair", value: "$100"},
{desc: "Rent", value: "$350"},
];

const initialIncome = [
{desc: "Weekly Deposit", value: "$400"},
{desc: "lol", value: "$400"},
{desc: "Baled Hay", value: "$100"},
{desc: "Sold car", value: "$350"},
];
export function InputSection(props){
    const [purchases, setPurchases] = useState(initialPurchases);
    const [income, setIncome] = useState(initialIncome);
    const deletePurchase = name => {
        setPurchases(purchases => purchases.filter(purchases => purchases.desc !== name));
    }
    const addPurchase = name => {
        setPurchases(purchases => [name, ...purchases])
    }

    const deleteIncome = name => {
        setPurchases(income => income.filter(income => income.desc !== name));
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
        <NewPurchase add = {addPurchase}/>
        {purchases.map(purch => <Purchase key = {purch.desc} purch = {purch} deletePurchase = {deletePurchase}/>)};
      </div>
      </div>
  );
}

