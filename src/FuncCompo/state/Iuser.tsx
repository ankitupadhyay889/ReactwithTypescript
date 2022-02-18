// bas thoda type define krlo tumhara hi shi hai tum apna hi karo wo best hai. string type se input m string number sb likh rha.

import React, { useState } from 'react';

type fom = {
    fname: string;
    lname: string;
    email: string;
    age: number;
}

const defV = {
    fname: "",
    lname: "",
    email: "",
    age: 0
}

const Iuser = () => {

    const [data, setdata] = useState<fom>(defV);

    const haC = (e:any) => {
        setdata(e.currentTarget.value)
    }

    return (
        <div>
            <form>
                <label htmlFor='name'> Enter name: </label> 
                <input type="text" name="fname" autoComplete="off" value={data.fname} onChange={haC} />
                <br/>
                <input type="text" name="lname" autoComplete="off" value={data.lname} onChange={haC} />
                <br/>
                <input type="text" name="email" autoComplete="off" value={data.email} onChange={haC} />
                <br/>
                <input type="number" name="age" autoComplete="off" value={data.age} onChange={haC} />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Iuser;