import React from 'react';

import './App.css';

import CanvasJSReact from './canvasjs.react';
//var CanvasJS = CanvasJSReact.CanvasJS;
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
      <InputSection></InputSection>
      <OutputSection></OutputSection>
    </div>
  );
}

function InputSection(props){
  return(
    <div id="inputBox">
    <p id = "header">Financial Tool</p>
      <div id="incomeBox">
        <p className="boxHeader">Income</p>
        <p className="instruction">Please select your income type</p>
        <p className="incomeType">Salary</p>
        <p className="incomeType">Hourly</p>
      </div>
      <div id="purchasesBox">
        <p className="boxHeader">Purchases</p>
        <p className="instruction">Enter a new Purchase</p>
        <p className="paragraphText">Purhcase 1</p>
        <p className="paragraphText">Purchase 2</p>
        <p className="paragraphText">Purchase 3</p>
        <p className="paragraphText">Purchase 4</p>
        <p className="paragraphText">Purchase 5</p>
        <p className="paragraphText">Purchase 6</p>
      </div>
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

export default App;
