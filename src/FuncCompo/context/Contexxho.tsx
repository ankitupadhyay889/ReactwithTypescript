import React, { useContext, useState, createContext } from 'react';
import lca from "../state/logo192.png"

const theme = createContext({background: "black" , color: "white"})
const themes = {
    red: {background: "white" , color: "red"},
    light: {background: "white" , color: "gray"},
    dark: {background: "black" , color: "white"},
}

const Contexxho = () => {

    const threre = useContext(theme);
    const [them, setthem] = useState(themes);

    const Op = () => {
        setthem(them.red);
    }

    return (
        <>
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
        <br/>
        <h2> Changing the style </h2>
        <button onClick={Op}> Chnage </button>
        </>        
    );
};

export default Contexxho;