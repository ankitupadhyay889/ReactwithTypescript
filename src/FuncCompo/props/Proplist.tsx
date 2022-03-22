import React from 'react';

type Lis = {
    names: {
        first: string,
        last: string
    }[]
}
const Proplist = (props: Lis) => {
    return (
        <div>
            {
                props.names.map((nak) => {
                    return(
                        <h1 key={nak.first}> <li>FullName is {nak.first} {nak.last} </li> </h1>
                    )
                })
            }
        </div>
    );
};

export default Proplist;

// props: Lis[] aise bhi likh skte hai