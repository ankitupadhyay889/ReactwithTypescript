import React from 'react';
import { useTitle } from './useTitle';

const First = () => {

    useTitle("Custom Hook")

    return (
        <div>
            <h1>Custom Hook</h1>
        </div>
    );
};

export default First;