import React from 'react';

type Inp = {
    value: string
    // hanC: (event: React.ChangeEvent<HTMLInputElement>) => void  agar mann hai toh event aise as a prop call krlo vrna best hai compo m karo.
}

const Inpt = (props: Inp) => {

    const hanC = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }

    return (
        <div>
            <h2> Input handle change </h2>
            <input type="text" value={props.value} onChange={hanC} />
        </div>
    );
};

export default Inpt;