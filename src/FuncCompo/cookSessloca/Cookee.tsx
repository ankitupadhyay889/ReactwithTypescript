import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const Cookee = () => {

    const [name, setName] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');
    const [cookies, setCookie] = useCookies<string>(['user']);

    const handle = () => {
        setCookie("Name" ,name, { path: '/' });
        setCookie("Password" ,pwd, { path: '/' });
    }

    return (
        <>
            <h1> React application that takes the username and password from the user and stores it as a cookie in the users computer. </h1>
            <div className="App">
                <h1>Name of the user:</h1>
                <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <h1>Password of the user:</h1>
                <input type="password" placeholder="password" value={pwd} onChange={(e) => setPwd(e.target.value)}/>
                <br/><br/>
                <div>
                    <button onClick={handle}>Set Cookie</button>
                </div>
            </div>
            <div>
                {cookies.Name && (<div>Name: <p>{cookies.Name}</p></div>)}

                {cookies.Password && (<div>Password: <p>{cookies.Password}</p></div>)}
            </div>
        </>
    );
};

export default Cookee;