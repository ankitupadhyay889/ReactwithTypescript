import React, { ChangeEvent, useState } from 'react';

const Form = () => {

    const [name, setname] = useState("");

    const [entry, setentry] = useState<Array<any>>([]);

    const Sub = (e: any) =>{
        e.preventDefault();
        const all = {name:name};
        setentry([...entry , all]);
        setname("");
    }

    return (
        <div>
            <form onSubmit={Sub}>
                <input type="text" name="name" autoComplete="off" value={name} onChange={(e)=>setname(e.target.value)} />
                <br/>
                <button type="submit">Submit</button>
            </form>
            <div>
                {
                    entry.map((curEl , id)=>{
                        return(
                        <div key={id}>
                            <p> {curEl.name} </p>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Form;