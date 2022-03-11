import React, { useState } from 'react';

type poss = {
    color: string;
    width: string;
    height: string;
}

const Addon = (props: poss) => {

    const [plus, setplus] = useState<number>(0)

    const add = () => {
        setplus( plus + 1 )
    }

    return (
        <div>
            <h2> {plus} </h2>
            <button style={{backgroundColor: props.color , height: props.height , width: props.width}} onClick={add}> Custom Addon </button>
        </div>
    );
};

export default Addon;