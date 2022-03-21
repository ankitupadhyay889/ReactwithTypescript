import Button from "./Button";
import React, { ChangeEvent, useState } from 'react';
import Addon from "./Addon";
import Inpcus from "./Inpcus";

const Sbkocall = () => {

    const [as, setas] = useState<number>(0)
    const [name, setname] = useState<string>("")

    const kp = () => {
        console.log("This is cutom btn"); 
        setas( as + 1 );
    }

    const kalp = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(setname(e.target.value));
        
    }

    return (
        <>
        <h1>Colorful Custom Button Components {as} </h1>
        <Button border="none" color="green" height="50px" width="100px" radius="5%" onClick={kp} children = 'Button'/>

        <br/><br/>
        <Addon color="green" height="50px" width="100px"/>
        
        <br/><br/>
        <Inpcus value={name} onChange={kalp} />
        </>
    );
};

export default Sbkocall;