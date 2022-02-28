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

// hum contexxho ko bhi call kr skte hai but jisme provider bnate hai uiki browser p call krte hai
// maine contexx m consume kiya hai or CallCont m isko call kiya toh aap p denpend krta hai.