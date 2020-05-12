import React from 'react';

const purchases = [
{desc: "Groceries", value: "$400"},
{desc: "Gas", value: "$10"},
{desc: "Car repair", value: "$100"},
{desc: "Rent", value: "$350"}

];
export function InputSection(props){
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
        {purchases.map(purch => <Purchase key = {purch.desc} purch = {purch} />)};
      </div>
    </div>
  );
}

function Purchase(props) {
    const purch = props.purch;
    return (
        <div>
        <p className= "paragraphText" ><b>Value:</b> {purch.value} <b>Description: </b>{purch.desc} </p>
        </div>
    );
} 