import React, { useState } from 'react';

// this is controlled form component

const Simpleform = () => {

    const [dt, setdt] = useState<any>("");
    const [show, setshow] = useState<Array<any>>([])

    const sub = (e:any) => {
        e.preventDefault();
        const all = {data:dt};
        setshow([...show , all]);
        setdt(" ");
    }

    const haC = (e:any) => {
        setdt(e.currentTarget.value)
    }

    return (
        <div>
            <form onSubmit={sub}>
                <label> Enter name: </label> 
                <input type="text" name="name" value={dt} onChange={haC} />
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

export default Simpleform;