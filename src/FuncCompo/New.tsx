import React from 'react';

type Listpro = {
    lists:{
    name: string;
    address: string;
    phonenumber: number;
    }[]
}

const New = (props:Listpro) => {
    return (
        <div>
            <li> {props.lists[0].name} </li>
            <li> {props.lists[1].address} </li>
            <li> {props.lists[2].phonenumber} </li>
        </div>
    );
};

export default New;