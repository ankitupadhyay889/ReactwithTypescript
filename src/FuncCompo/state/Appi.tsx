import React, { useEffect, useState } from 'react';

type Smka = {
    gender: string;
    email: string;
    location: string;
}

const Appi = () => {

    const [data, setdata] = useState<Smka[]>([]);
    const [visible, setvisible] = useState<number>(5);

    const getDa = async() => {
        const res = await fetch('https://randomuser.me/api/?results=35')  
        const da = await res.json()
        setdata(da.results);
    }

    const loadm = () => {
        setvisible(visible + 5);
    }

    const rednerDa = (item: any, ind: any) => {
        return(
            <div>
                {item.gender}
                {item.location}
                {item.email}
            </div>
        )
    }

    useEffect(() => {
        getDa();
    }, [])

    return (
        <div>
            {data.slice(0,visible).map(rednerDa)}
            <button onClick={loadm}></button>
        </div>
    );
};


export default Appi;