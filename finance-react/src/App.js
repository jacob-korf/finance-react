//import React, {useEffect} from 'react';
import React from 'react';
import './App.css';
import {Purchase} from './Purchase';
import {useSelector, useDispatch} from 'react-redux';
import {loadUserPurchases, startAddingPurchase} from './actions';
import CanvasJSReact from './canvasjs.react';
import { InputSection } from './InputSection';


var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = {
  backgroundColor: "#282c34",
  title: {
    text: "Income Vs. Spending",
    fontFamily: "Segoe UI",
    fontColor: "white"
   
  },
  axisY:{
    labelFontColor: "white",
  },
  axisX:{
    labelFontColor: "white",
  },
  data: [{				
            type: "bar",
            dataPoints: [
                { label: "Spending", y: 478 , color: "red" },
                { label: "Income",  y: 2700 , color: "green" },
            ]
   }]
}




function App(){
 
  
  return (
    <div id="finance-root">
    <UserInputSection />
     
      <InputSection />
      <OutputSection /> 
    </div>
  );
}

function OutputSection(props){
 return (
  <div id="outputBox">
    <div id="spendingInfoBox">
      <p className="boxHeader">Budgeting Information</p>
      <p className="paragraphText">Percent of Income Spent: </p>
      <p className="paragraphText">Percent of Income Saved: </p>
    </div>
    <div id="graphBox">
      <div>
        <CanvasJSChart options = {options} />
      </div>
    </div>
  </div>
  ); 
}

function UserInputSection(props){
  let user = "";
  const purchases = useSelector(state => state.purchases);
  const dispatch = useDispatch();
    const onLoad = () => {
      dispatch(loadUserPurchases(user))
    }

    function submitUsername(){
      user = document.getElementById("usernameInputField").value;
      onLoad.call();
    }

    const onAdd = () => {
      dispatch(startAddingPurchase(document.getElementById("usernameInputField").value, document.getElementById("amountInputField").value, document.getElementById("descriptionInputField").value))
    }

  return (
   <div id="userInputBox">
   <p className = "usernameBoxHeader">Enter your username</p>
     <button id="usernameInputButton" onClick={submitUsername}>Enter</button>
      <input id="usernameInputField" type = "text"></input>
      <button id="purchaseInputButton" onClick={onAdd}>Enter</button>
      <input id="amountInputField" type = "text"></input>
      <input id="descriptionInputField" type = "text"></input>
      {purchases.map(purchase => <Purchase  key={purchase.id} purchase = {purchase}/>)}
   </div>
   ); 
 }

export default App;



 /*useEffect(() => {
    dispatch(loadPurchases([
      {id: 1, username: "ben", amount: 50, description: "rent1"},
        {id: 1, username: "ben", amount: 55, description: "rent2"},
    {id: 1, username: "ben", amount: 60, description: "rent3"},
    ]));
  }, [dispatch]);
  */


  /*
  <button onClick={submitUsername}>load</button>
    <input id="usernameInputBox" type = "text"></input>
*/