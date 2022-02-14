import React from 'react';

type greT = {
    category: Array<any>,
    isBool: Boolean,
    name: {
        fname: string,
        lname: string
    }
}

const CallArrprop = (props:greT) => {
    return (
        <div>
            <p>{ props.isBool ? `Welcome ${props.category[0]} ----- ${props.category[1]} and you are logged in and address is
            
            ------ ${props.category[2]}` : "Welcome as guest"  } </p>

            <p> {props.name.fname} {props.name.lname} </p>
        </div>
    );
};

export default CallArrprop;