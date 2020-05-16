import React, {useState} from 'react';
export function NewIncome(props) {
    const [val, setVal] = useState("");
    const [desc, setDesc] = useState("");
    const [counterIncomes, setICounter] = useState(0);
    return (
        <div>
       <p className = "paragraphText"> Description: <input type = "text" onChange = {e => setDesc(e.target.value)}/></p>
         <p className = "paragraphText">Value: <input type = "text" onChange = {e => setVal(e.target.value)}/></p>
         <input className = "addButton" type = "button"  value = "Add new income" onClick = {() => props.add({desc: desc, value: val})}/>
        </div>
    );
} 