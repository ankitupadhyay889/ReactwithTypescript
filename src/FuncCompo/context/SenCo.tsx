import React from 'react';
import { CallCont } from './CallCont';

const Fname = React.createContext<any>("");

const SenCo = () => {
    return (
        <>
            <Fname.Provider value={"Ankit"}> <CallCont /> </Fname.Provider>  
        </>
    );
};

export default SenCo;
export {Fname};