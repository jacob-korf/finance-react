import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadUserPurchases, startAddingPurchase} from './actions';
export function NewPurchase(props) {
    const [val, setVal] = useState("");
    const [desc, setDesc] = useState("");
    const [counterPurchases, setPCounter] = useState(0);
    const dispatch = useDispatch();

    const onAdd = () => {
        if(props.user.length > 0) {
            dispatch(startAddingPurchase(props.user, val, desc))

        } else {
            alert("Log into your personal username before adding new purchases")
        }
    }

    return (
        <div>
         <p className = "paragraphText"> Description: <input type = "text" onChange = {e => setDesc(e.target.value)}/></p>
         <p className = "paragraphText">Value: <input type = "number" onChange = {e => setVal(e.target.value)}/></p>
         <input className = "addButton" type = "button"  value = "Add new purchase" onClick = {onAdd}/>
        </div>
    );
}