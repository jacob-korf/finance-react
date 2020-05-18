import React from 'react';

import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function OutputSection(props){
  
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
                { label: "Spending", y: props.pur*-1 , color: "red" },
                { label: "Income",  y: props.inc , color: "green" },
            ]
   }]
}
    return (
     <div id="outputBox">
       <div id="spendingInfoBox">
         <p className="boxHeader">Budgeting Information</p>
         <p className="paragraphText">Percent of Income Spent: { props.inc > 0 ?
         (parseFloat(props.pur) *-100 / parseFloat(props.inc)).toFixed(2)
        : 0}%</p>
         <p className="paragraphText">Percent of Income Saved: { parseFloat(props.inc) > parseFloat(props.pur*-1) ?
         ((parseFloat(props.inc)-(parseFloat(props.pur) *-1)) *100/ parseFloat(props.inc)).toFixed(2)
        : 0}%</p>
       </div>
       <div id="graphBox">
         <div>
           <CanvasJSChart options = {options} />
         </div>
       </div>
     </div>
     ); 
   }
   