import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadUserPurchases, startAddingPurchase} from './actions';
export function NewPurchase(props) {
    const [val, setVal] = useState("");
    const [desc, setDesc] = useState("");
    const [counterPurchases, setPCounter] = useState(0);
    const dispatch = useDispatch();

    const onAdd = () => {
        dispatch(startAddingPurchase(props.user, val, desc))
    }

    return (
        <div>
         <p className = "paragraphText"> Description: <input type = "text" onChange = {e => setDesc(e.target.value)}/></p>
         <p className = "paragraphText">Value: <input type = "text" onChange = {e => setVal(e.target.value)}/></p>
         <input className = "addButton" type = "button"  value = "Add new purchase" onClick = {onAdd}/>
        </div>
    );
}