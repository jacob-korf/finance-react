import React from 'react';

import './App.css';

import CanvasJSReact from './canvasjs.react';
import { InputSection } from './InputSection';
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

export default App;
