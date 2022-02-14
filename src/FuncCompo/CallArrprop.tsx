import React from 'react';

type greT = {
    category: Array<any>
}

const CallArrprop = (props:greT) => {
    return (
        <div>
            <p> {props.category[0]} ----- {props.category[1]} ------  {props.category[4]} </p>
        </div>
    );
};

export default CallArrprop;