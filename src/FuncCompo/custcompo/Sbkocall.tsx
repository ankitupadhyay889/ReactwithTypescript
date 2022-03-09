import Button from "./Button";
import React from 'react';

const Sbkocall = () => {

    const kp = () => {
        console.log("This is cutom btn");
        
    }

    return (
        <>
        <h1>Colorful Custom Button Components</h1>
        <Button border="none" color="green"
            height="50px"
            width="100px"
            radius="5%"
            onClick={kp}
            children = "Button"/>
        </>
    );
};

export default Sbkocall;