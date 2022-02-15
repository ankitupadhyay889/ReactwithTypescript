import React, { useState } from 'react';

const Newtodo = () => {

    const [input, setinput] = useState("")
    const [show, setshow] = useState<Array<any>>([])

    const add = () => {
        if(!input){

        }else{
            setshow([...show , input]);
            setinput("")
        }
    }    

    const del = (id:number) => {
        const updat = show.filter((ele , ind) => {
            return ind !== id;
        })
        setshow(updat);
    }

    return (
        <>
            <input value={input} onChange={(e) => setinput(e.target.value)} />
            <button onClick={add}>Add</button>

            <br/><br/>

            <div>
                {
                    show.map((ele , ind) => {
                        return(
                            <div>
                                <p> {ele} <button onClick={() => del(ind)}>Del</button> </p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Newtodo;