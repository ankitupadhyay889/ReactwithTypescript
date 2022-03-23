import React from 'react';

type hNa = {
    heroName: string
}

const Usercom = (props: hNa) => {

    if(props.heroName === "Joker"){
        throw new Error("Not a hero")
    }

    return (
        <div>
            {props.heroName}
        </div>
    );
};

export default Usercom;