import React from 'react';

type greT = {
    category: Array<any>,
    isBool: Boolean
}

const CallArrprop = (props:greT) => {
    return (
        <div>
            <p>{ props.isBool ? `Welcome ${props.category[0]} ----- ${props.category[1]} and you are logged in and address is
            
            ------ ${props.category[2]}` : "Welcome as guest"  } </p>
        </div>
    );
};

export default CallArrprop;