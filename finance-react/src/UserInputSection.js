import React from 'react';
import {loadUserPurchases} from './actions';
import {useSelector, useDispatch} from 'react-redux';


const purchases = [
{desc: "Groceries", value: "$400"},
{desc: "Gas", value: "$10"},
{desc: "Car repair", value: "$100"},
{desc: "Rent", value: "$350"}

];

let user = "";
const dispatch = useDispatch();

const onLoad = () => {
    dispatch(loadUserPurchases(user));
  }

function submitUsername(){
    user = document.getElementById("usernameInputBox").value
    onLoad.call();
  }

export function UserInputSection(props){
  return(
    
    <div id="userInputSection">
        <button onClick={submitUsername}>load</button>
        <input id="usernameInputBox" type = "text"></input>
    </div>
  );
}

function Purchase(props) {
    const purch = props.purch;
    return (
        <div>
        <p className= "paragraphText" ><b>ID:</b> {purch.id} <b>Value:</b> {purch.value} <b>Description: </b>{purch.desc} </p>
        </div>
    );
} 