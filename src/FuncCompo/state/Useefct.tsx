import React, { useEffect, useState } from 'react';

const Useefct = () => {
    
    const [load, setload] = useState(true);
    const [data, setdata] = useState<Array<any>>([]);

    const getDa = async() => {
        const res = await fetch('https://disease.sh/v3/covid-19/countries')  
        const da = await res.json()  
        setdata(da);
        setload(false)    
    }

    useEffect(() => {
        getDa();
    }, [])

    return (
        <div>
            {
                load?<h1>Loading...</h1>:data.map((item,i)=>{
                    <div> {item.country} </div>
                })
            }
        </div>
    );
};


export default Useefct;