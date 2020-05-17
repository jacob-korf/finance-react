import React from 'react';

import './App.css';

import { InputSection } from './InputSection.js';
import { HeaderFinance } from './HeaderFinance';
import {OutputSection} from './OutputSection.js'

function App(){
  return (
    <div id = "finance-root">
      <HeaderFinance />
    <div id="finance-data">
      <InputSection />
      <OutputSection />
    </div>
    </div>
  );
}



export default App;
