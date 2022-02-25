import React from 'react';
import Contexxho from './Contexxho';

const Firstname = React.createContext<string>("");

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