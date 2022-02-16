import React, { ChangeEvent, useState } from 'react';

const Userregis = () => {

    const [name, setname] = useState<string>("");
    const [show, setshow] = useState<Array<any>>([])

    const sub = (e:any) => {
        e.preventDefault();
        const all = {name:name};
        setshow([...show , all]);
        setname("");
    }

    const haC = (e:ChangeEvent<HTMLInputElement>) => {
        setname(e.currentTarget.value)
    }

    return (
        <div>
            <form onSubmit={sub}>
                <label> Enter name: </label> 
                <input type="text" name="name" autoComplete="off" value={name} onChange={haC} />
                <br/>
                <button type="submit">Submit</button>
            </form>
            <div>
                {
                    show.map((curEl:any , id:number) => {
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

export default Userregis;