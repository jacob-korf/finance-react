import React, {useState} from 'react';
export function HeaderFinance(props) {
    const [username, setUsername] = useState("");
    
    return (
        <div id = "finance-head-root">
            <p id = "header">Financial Tool</p>
            <div id = "userBox">
            <div id = "userDiv">
        <p className="usernameHeader">Username: <input type = "text" onChange = {e => setUsername(e.target.value)}/></p>
        <input className = "addButton" type = "button"  value = "Log in" onClick={() => props.user(username)}/> 
        </div>
            </div>
        </div>

    );
} 