import React, { useMemo, useState } from 'react';

const Memhoo = () => {

    const [co, setco] = useState<number>(0);
    const [set, setset] = useState<number>(10);

    const Coka = () => {
        setco(co + 1)
    }
    const Setka = () => {
        setset(set * 2)
    }
    //! Jab bhi hum set update karenge toh bhi y render hoga but hum toh yha co p kr rhe hai render, isko defend k liye useMemo use hota hai" 

    const dekhMemo = useMemo(function multi() {
        console.log("Memo ab sirf y decide krega ki kisko kb render hona hai [] isme")
        return co*5;
    },[co])

    // const multi = () => {
    //     console.log("Dono p call hoga")
    //     return co*5;
    // }

    return (
        <div>
            <h1> Now we use useMemo</h1>
            <br/>
            <button onClick={Coka}> Update Co </button> {co}
            {/* <br/> {multi()} <br/> */}
            <br /> {dekhMemo} <br /> 
            <button onClick={Setka}> Update Set </button> {set}
        </div>
    );
};

export default Memhoo;