import React from 'react';

type Listpro = {
    lists:{
    name: string;
    address: string;
    phonenumber: number;
    }[]
}

// array of an object or <Array<string>>

const New = (props:Listpro) => {
    return (
        <div>
            <ul> {props.lists[0].name} </ul>
            <ul> {props.lists[0].address} </ul>
            <ul> {props.lists[0].phonenumber} </ul>
        </div>
    );
};

export default New;