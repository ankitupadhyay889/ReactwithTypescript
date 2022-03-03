import React, { useState } from 'react';

const Conditionsl = () => {

    const [log, setlog] = useState(false)

    const li = () => {
        setlog(true)
    }

    const lo = () => {
        setlog(false)
    }

    return (
        <div>
            <button onClick={li}> LogIn </button>
            <br/><br/>
            <button onClick={lo}> LogOut </button>
            <br/>
            <h1> User is {log ? `logged in` : 'logged out'} </h1>
        </div>
    );
};

export default Conditionsl;