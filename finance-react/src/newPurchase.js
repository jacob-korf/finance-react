import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {startAddingPurchase} from './actions';
export function NewPurchase(props) {
    const [val, setVal] = useState("");
    const [desc, setDesc] = useState("");
    const dispatch = useDispatch();

    const onAdd = () => {
        if(props.user.length > 0) {
            dispatch(startAddingPurchase(props.user, val*-1, desc))
            props.load();

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