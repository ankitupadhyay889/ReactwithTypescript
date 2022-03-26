import React from 'react';

const Highco = () => {
    return (
        <div>
            <h1> High OrderComponent </h1>
            <Highoc kna = {Simple} />
        </div>
    );
};

function Highoc(props: any){
    return(
        <div>
            <h1> <props.kna akDa = "This is high order component" Da = {20} /> </h1>
        </div>
    )
}
function Simple(props: any){
    return(
        <div>
            <h2> Normal Function hai {props.akDa} {props.Da + 10} </h2>
        </div>
    )
}

export default Highco;