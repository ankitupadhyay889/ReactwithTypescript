import React from 'react';
import { useChnage } from './useChnage';

const Third = () => {

    useChnage("Custom Hook" , "log with custom hook")
    // if both string match means string ho then it works on console

    return (
        <div>
            <h1> Third Commit Updated No Error </h1>
        </div>
    );
};

export default Third;