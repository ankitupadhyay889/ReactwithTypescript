import React from 'react';
import { useChnage } from './useChnage';

const Third = () => {

    useChnage("Custom Hook" , "log with custom hook1")

    return (
        <div>
            <h1> Thired Commit Update error </h1>
        </div>
    );
};

export default Third;