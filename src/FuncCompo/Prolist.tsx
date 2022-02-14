import React from 'react';

type Lis = {
    names: {
        first: string,
        last: string
    }[]
}
const Prolist = (props: Lis) => {
    return (
        <div>
            {
                props.names.map((nak) => {
                    return(
                        <h1 key={nak.first}> <li> {nak.first} {nak.last} </li> </h1>
                    )
                })
            }
        </div>
    );
};

export default Prolist;