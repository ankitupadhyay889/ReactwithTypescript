import React from 'react';

type esr = {
    hu: string;
}

const HighComp = () => {
    return (
        <div>
            <h1> High Order Component. </h1>
            {/* <Hoc Cmp={Simple} /> */}
        </div>
    );
};

const Hoc = (k: string) => {
    // const Cmp = k.Cmp
    return(
        <div>
            {/* <h1> <Cmp hocD={20}/></h1> */}
        </div>
    )
}

const Simple = (k: string) => {
    return(
        <div>
            {/* <h1> {10 + k.hocD} </h1> */}
        </div>
    )
}

export default HighComp;