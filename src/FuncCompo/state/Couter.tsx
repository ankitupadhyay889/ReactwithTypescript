import React, { useState } from 'react';

const Couter = () => {
    
    const [counter, setcounter] = useState<number>(0)

    const add = () => {
        setcounter(counter + 1)
    }

    const sub = () => {
        if(counter > 0){
            setcounter(counter - 1)
        }
    }

    return (
        <div>
            <h1> Result {counter} </h1>
            <button onClick={add} > + </button>
            <button onClick={sub} > - </button>
        </div>
    );
};

export default Couter;