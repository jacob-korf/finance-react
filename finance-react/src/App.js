import React, { useState, Component } from 'react';

import './App.css';

import { InputSection } from './InputSection.js';
import { HeaderFinance } from './HeaderFinance';
import {OutputSection} from './OutputSection.js';
import {useSelector, useDispatch} from 'react-redux';
import {loadUserPurchases} from './actions';
import {Purchase} from './Purchase';

function App(){
   
  const [userName, setUserName] = useState("hello");
  const trackUser = user => {setUserName(user => userName)};
  const parentFunction=user=>{
    setUserName(user);
  }
  return (
    <div id = "finance-root">
      <HeaderFinance user={parentFunction}/>
    <div id="finance-data">
      {<InputSection user={userName}/>}
      <OutputSection />
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
      //user = document.getElementById("usernameInputField").value;
      user = usern;
      onLoad.call();
      props.user(usern);
    }
    const [usern, setUsern] = useState("");
  return (
   <div id="userInputBox"> 
   <p className = "usernameBoxHeader">Enter your usernames</p>
     <button id="usernameInputButton" onClick={submitUsername}>Enter</button>
      <input id="usernameInputField" type = "text" onChange = {e => setUsern(e.target.value)}></input>
      {purchases.map(purchase => <Purchase  key={purchase.id} purchase = {purchase}/>)} 
   </div>
   ); 
 }

export default App;
