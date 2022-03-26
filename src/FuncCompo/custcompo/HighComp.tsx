import React, { useState } from 'react';


const HighComp = () => {
    return (
        <div>
            <h1> High Order Component </h1>
            <Hoc ank={Counter} />
            
            <HocG ank={Counter} />
        </div>
    );
};

//! isiko kehte hai hoc ab jitna mere counter k extra chezz chaiye mai aise dunga and props p any khud de rha 

function Hoc(props: any){
    return(
        <div>
            <h2 style={{backgroundColor: "red"}}> <props.ank /> </h2>
        </div>
    )
}

function HocG(props: any){
    return(
        <div>
            <h2 style={{backgroundColor: "green"}}> <props.ank /> </h2>
        </div>
    )
}

function Counter(){

    const [count, setcount] = useState<number>(0)

    const ap = () => {
        setcount(count + 2);
    }

    return(
        <div>
            <h3> {count} </h3>
            <button onClick={ap}> Count plus </button>
        </div>
    )
}

export default HighComp;