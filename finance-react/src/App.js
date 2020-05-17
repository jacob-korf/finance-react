import React, { useState} from 'react';

import './App.css';

import { InputSection } from './InputSection.js';
import { HeaderFinance } from './HeaderFinance';
import {OutputSection} from './OutputSection.js';

function App(){
  const [income, setIncome] = useState(0);
  const [purchases, setPurchases] = useState(0);
  const [userName, setUserName] = useState("");
  const userChild =user=>{
    setUserName(user);
  }
  const incomeChild = inc => {
    setIncome(inc)
  }
  const purchaseChild = pur => {
    setPurchases(pur)
  }
  return (
    <div id = "finance-root">
      <HeaderFinance user={userChild}/>
    <div id="finance-data">
      {<InputSection user={userName} inc = {incomeChild} pur = {purchaseChild}/>}
      <OutputSection inc = {income} pur = {purchases}/>
    </div>
    </div>
  );
}


export default App;
