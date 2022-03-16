import React, { createContext } from 'react';
import Contexxho from './Contexxho';

export type title = {
    name: string;
    author: string;
}

export const ctx = createContext<title|null>(null);

const sampe: title = {
    name: "Using React Context in a Typescript App",
    author: "thehappybug",
}

const Basi = () => {
    return (
        <ctx.Provider value={sampe}> <Contexxho /> </ctx.Provider>
    );
};

export default Basi;