import React, { useRef } from 'react';
import Cla from "./logo192.png";

const Refhoo = () => {

    const log = useRef<HTMLInputElement>(null)
    const logo = useRef<HTMLImageElement>(null)

    const Po = () => {
        if(log.current){
            log.current.value = "100";
        }
    }
    
    const Pop = () => {
        if(logo.current){
            logo.current.style.transform = "rotate(25deg)"
        }
    }

    return (
        <div>
            <input type="text" ref = {log} />
            <button onClick={Po}> Ref </button>
            <img src={Cla} alt="ijak" onClick={Pop} ref = {logo} />
        </div>
    );
};

export default Refhoo;