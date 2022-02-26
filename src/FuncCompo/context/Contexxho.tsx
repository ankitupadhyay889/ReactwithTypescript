import React, { useContext } from 'react';
import lca from "../state/logo192.png"
import { userContext } from './A';

const theme = React.createContext({background: "white" , color: "red"})

const Contexxho = () => {

    const threre = useContext(theme);
    const ContextValue = useContext(userContext)

    return (
        <>
        <div> Name is {ContextValue.name} -- {ContextValue.rollNo} </div>
        <div style={{background: threre.background , color: threre.color}}>
            <h2> useContext Hook </h2>
            <input type="text" />
        </div>
        <br/>
        <div>
            <h2> useContext Hook1 </h2>
            <button style={{background: threre.background , color: threre.color}}> Change </button>
        </div>
        <br/>
        <div>
            <h2> useContext Hook2 </h2>
            <img style={{background: threre.background , color: threre.color}} src={lca} alt="po" />
        </div>
        </>        
    );
};

export default Contexxho;