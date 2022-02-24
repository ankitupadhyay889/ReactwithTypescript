import React,{ useEffect, useRef, useState } from 'react';

const Usrefhoo = () => {

    // use custom hook usePrevious and replace useRef by usePrevious and disable useEffect and in h2 only {preV}

    const [cout, setcout] = useState<number>(0)
    const preV = useRef<number>(0)

    useEffect(() => {
      preV.current = cout
    }, [cout])
    

    const oP = () => {
        setcout(cout + 1);
    }

    return (
        <div>
            <h1> Count value with useState : {cout} </h1>
            <h2> Count value with useRef : {preV.current} </h2>
            <button onClick={oP}>Inncreament</button>
        </div>
    );
};

export default Usrefhoo;