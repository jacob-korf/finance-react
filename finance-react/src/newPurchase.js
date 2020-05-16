import React, {useState} from 'react';
export function NewPurchase(props) {
    const [val, setVal] = useState("");
    const [desc, setDesc] = useState("");
    const [counterPurchases, setPCounter] = useState(0);
    return (
        <div>
       <p className = "paragraphText"> Description: <input type = "text" onChange = {e => setDesc(e.target.value)}/></p>
         <p className = "paragraphText">Value: <input type = "text" onChange = {e => setVal(e.target.value)}/></p>
         <input className = "addButton" type = "button"  value = "Add new purchase" onClick = {() => props.add({desc: desc, value: val})}/>
        </div>
    );
} 