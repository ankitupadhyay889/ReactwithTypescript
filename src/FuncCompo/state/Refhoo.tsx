import React, { useRef } from 'react';
import cla from "./logo192.png"

const Refhoo = () => {

    const log = useRef<any>(null)
    const Po = () => {
        log.current.style.transform = "rotate(25deg)"
    }

    return (
        <div>
            <img src={cla} alt="po" onClick={Po} ref={log} />
        </div>
    );
};

export default Refhoo;