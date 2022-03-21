// bas thoda type define krlo tumhara hi shi hai tum apna hi karo wo best hai. string type se input m string number sb likh rha.

import React, { ChangeEvent,useState } from 'react';

type Fom = {
    fname: string;
    lname: string;
    email: string;
}

const defV = {
    fname: "",
    lname: "",
    email: "",
}

const Iuser = () => {

    const [data, setdata] = useState<Fom>(defV);

    const haC = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setdata({...data , [name]: value});
    }

    const fomSub = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={fomSub}>
                <label> Enter name: </label> 
                <input type="text" name="fname" autoComplete="off" value={data.fname} onChange={haC} />
                <br/>
                <input type="text" name="lname" autoComplete="off" value={data.lname} onChange={haC} />
                <br/>
                <input type="text" name="email" autoComplete="off" value={data.email} onChange={haC} />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Iuser;