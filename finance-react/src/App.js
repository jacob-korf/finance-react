import React, { useState, Component } from 'react';

import './App.css';

import { InputSection } from './InputSection.js';
import { HeaderFinance } from './HeaderFinance';
import {OutputSection} from './OutputSection.js';

function App(){
   
  const [userName, setUserName] = useState("");
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


export default App;
