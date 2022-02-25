import React, { useRef } from 'react';
import cla from "./logo192.png"

const Refhoo = () => {

    const logo = useRef<any>(null)
    const Po = () => {
        logo.current.style.transform = "rotate(25deg)"
    }

    return (
        <div>
            <img src={cla} alt="po" onClick={Po} ref={logo} />
        </div>
    );
};

export default Refhoo;