import React, { useContext } from 'react';
import {there} from "./CallCont";
import {Fname} from "./SenCo";
import {ctx} from "./Basi";

const Contexxho = () => {

    const call = useContext(there);
    const cont = useContext(Fname);
    const hmm = useContext(ctx);

    return (
        <>
        <div> Name {call.name} </div>
        <div><h1> Name is {cont} </h1></div>
        <div> Name: {hmm?.name}, Author: {hmm?.author} </div>
        </>        
    );
};

export default Contexxho;