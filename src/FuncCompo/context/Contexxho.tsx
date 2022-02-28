import React, { useContext } from 'react';
import lca from "../state/logo192.png"
import {there} from "./CallCont";
import {Fname} from "./SenCo";

const theme = React.createContext({background: "white" , color: "red"})

const Contexxho = () => {

    const threre = useContext(theme);
    const call = useContext(there)
    const cont = useContext(Fname);

    return (
        <>
        <div> Name {call.name} </div>
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
        <div>
            <h1> Name {cont} </h1>
        </div>
        </>        
    );
};

export default Contexxho;