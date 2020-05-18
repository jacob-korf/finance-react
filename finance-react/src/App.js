import React, { useState} from 'react';

import './App.css';

import { InputSection } from './InputSection.js';
import { HeaderFinance } from './HeaderFinance';
import {OutputSection} from './OutputSection.js';
import {Loader} from './loading.js';

function App(){
  const [income, setIncome] = useState(0);
  const [purchases, setPurchases] = useState(0);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const userChild =user=>{
    setUserName(user);
    setLoading(true);
    setTimeout(() => {setLoading(false)}, 1000)
  }
  const incomeChild = inc => {
    setIncome(inc)
  }
  const purchaseChild = pur => {
    setPurchases(pur)
  }
  const loadingwheel = num => {
    setLoading(true);
    setTimeout(() => {setLoading(false)}, 3000)
  }
  return (
    <div>{  loading 
    ?  <Loader />
      :  <div id = "finance-root">
          <HeaderFinance user={userChild}/>
          <div id="finance-data">
          <InputSection user={userName} inc = {incomeChild} pur = {purchaseChild} load = {loadingwheel}/>
          <OutputSection inc = {income} pur = {purchases}/>
          </div>
          </div>}
          </div>
    
   
  );
}


export default App;
