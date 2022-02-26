import React, { useContext } from 'react';
import lca from "../state/logo192.png"
import {Firstname} from "./A";
export interface IUserDetailContext {
    name: string;
    rollNo: number | null
}

const initialValue = {
    name: '',
    rollNo: null
}

const user = {
    name: 'Anuj',
    rollNo: 7
}

export const userContext = React.createContext<IUserDetailContext>(initialValue)

const theme = React.createContext({background: "black" , color: "white"})
// const themes = {
//     red: {background: "white" , color: "red"},
//     light: {background: "white" , color: "gray"},
//     dark: {background: "black" , color: "white"},
// }
const Contexxho = () => {

    const threre = useContext(theme);
    const fname = useContext(Firstname);

    return (
        <>
        <div> Name is : {fname} </div>
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