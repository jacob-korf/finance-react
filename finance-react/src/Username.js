import React, {useState} from 'react';
export function Username() {
    const [username, setUsername] = useState("");
    return (
        <div id = "userDiv">
        <p className="usernameHeader">Username: <input type = "text" onChange = {e => setUsername(e.target.value)}/></p>
        <input className = "addButton" type = "button"  value = "Log in" /> 
        </div>
    );
} 