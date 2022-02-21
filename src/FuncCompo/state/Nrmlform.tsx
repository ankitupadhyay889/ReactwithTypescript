import React, { useState } from 'react';

const Nrmlform = () => {

    const [name, setname] = useState<string>("");
    const [show, setshow] = useState<string>("")

    const sub = (e:any) => {
        e.preventDefault();
        setshow(name);
        setname("");

        // if(name){
        //     setshow(name);
        //     setname("");
        // }else{
        //     alert("please fill data first")
        // }
    }

    const haC = (e:any) => {
        setname(e.currentTarget.value)
    }

    return (
        <div>
            <form onSubmit={sub}>
                <h3> {show} </h3>
                <label htmlFor="name"> Enter name: </label> 
                <input className='form-control' type="text" name="name" autoComplete="off" value={name} onChange={haC} required />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Nrmlform;