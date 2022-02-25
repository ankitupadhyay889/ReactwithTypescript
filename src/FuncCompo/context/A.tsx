import React from 'react';
import Contexxho from './Contexxho';

const Firstname = React.createContext<any>("");

const A = () => {

    return (
        <div>
            <Firstname.Provider value={"Ankit"}>
                <Contexxho />
            </Firstname.Provider>
        </div>
    );
};

export default A;
export {Firstname};