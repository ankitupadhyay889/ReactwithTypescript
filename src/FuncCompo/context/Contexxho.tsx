import React, { useContext } from 'react';
import {there} from "./CallCont";
import {Fname} from "./SenCo";

const Contexxho = () => {

    const call = useContext(there);
    const cont = useContext(Fname);

    return (
        <>
        <div> Name {call.name} </div>
        <div><h1> Name is {cont} </h1></div>
        </>        
    );
};

export default Contexxho;