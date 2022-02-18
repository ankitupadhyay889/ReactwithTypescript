import React, { useEffect, useState } from 'react';

const ApiCall = () => {

    const [covid, setcovid] = useState<Array<any>>([])

    const getCovid = async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        console.log(data);
        // setcovid(data.statewise);
    }

    useEffect(() => {
      getCovid()
    }, [])
    

    return (
        <div>
            {
                        covid.map((item , id) => {
                            return(
                                <h1 key={id}>
                                    <li> {item.state} </li>
                                    {/* <td> {item.confirmed} </td>
                                    <td> {item.recovered} </td>
                                    <td> {item.deaths} </td>
                                    <td> {item.active} </td>
                                    <li> {item.lastupdatedtime} </li> */}
                                </h1>
                            )
                        })
                    }      
        </div>
    );
};

export default ApiCall;