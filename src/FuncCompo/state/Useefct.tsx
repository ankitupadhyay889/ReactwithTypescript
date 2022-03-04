import React, { useEffect, useState } from 'react';

const Useefct = () => {
    
    const [load, setload] = useState(true);
    const [data, setdata] = useState<string[]>([]);

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
                load?<h2>Loading...</h2>:data.map((item: any,i: number)=>{
                    return(
                        <div key={i}>
                    <h3>Country: {item.country} , Death: {item.deaths} , Recovered: {item.recovered} , Active: {item.active} , Test: {item.tests} </h3>
                    <img src={item.countryInfo.flag} alt="flag" />
                        </div>
                    )
                })
            }
        </div>
    );
};


export default Useefct;