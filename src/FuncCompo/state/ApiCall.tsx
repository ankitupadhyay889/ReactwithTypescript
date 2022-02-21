import React, { useEffect, useState } from 'react';

const ApiCall = () => {

    const [covid, setcovid] = useState<Array<any>>([])

    const getCovid = async() => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);
        setcovid(data);
    }

    useEffect(() => {
      getCovid()
    }, [])
    

    return (
        <div>
            {
                covid.map((item , id) => {
                    return(
                        <div key={id}>
                            <li> {item.title} </li>
                            <img style={{height: "50px"}} src={item.image} alt="im" />
                        </div> 
                    )
                })
            }      
        </div>
    );
};

export default ApiCall;