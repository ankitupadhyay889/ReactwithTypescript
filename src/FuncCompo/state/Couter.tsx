import React, { useEffect, useState } from 'react';

// type cou = {
//     count: number
// }  apki marzi hai tumhara shi hai. tareeka

const Couter = () => {
    
    const [counter, setcounter] = useState<number>(0)

    // useEffect(() => {
    //     console.log("Initial count hua hai one time toh 0 se 1 dikhane lage ga browser p componentdidmount");
    //     setcounter(counter + 1)
    // }, [])

    useEffect(() => {
        console.log("y update p call hota rahega isko componentdidupdate bhi khte hai");
    }, [counter])

    // useEffect(() => {
    //     console.log("hr baar y call hoga jb bhi state chnage hoga or refresh hoga browser"); ye jayeda use nhi krte hum
    // })

    // useEffect(() => {
    //     console.log("unmount jb tum useeffect call kareoge toh y ata hai yaad karo or y hr baar ayega console p");
    //     return()=>{
    //         console.log("unmount");
    //     }
    // }, [counter])
    

    const add = () => {
        setcounter(counter + 1)
    }

    const sub = () => {
        if(counter > 0){
            setcounter(counter - 1)
        }
    }

    return (
        <div>
            <h1> Result {counter} </h1>
            <button onClick={add} > + </button>
            <button onClick={sub} > - </button>
        </div>
    );
};

export default Couter;