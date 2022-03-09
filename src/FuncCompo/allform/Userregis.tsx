import React, { ChangeEvent, useState } from 'react';
import { TextField , Button } from '@mui/material';

type sty = {
    styl: React.CSSProperties
}

type In = {
    fname: string,
    lname: string,
    pnumber: string,
    email: string,
    address: string,
    qualification: string,
    age: number,
}

const Userregis = (props: sty) => {

    const [useRegis, setuseRegis] = useState<In>({
        fname: "",
        lname: "",
        pnumber: "",
        email: "",
        address: "",
        qualification: "",
        age: 0,
    })

    const [store, setstore] = useState<Array<any>>([])

    const hanInp = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value;

        setuseRegis({...useRegis , [name]: value})
    }

    const subKa = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const all = {...useRegis};
        setstore([...store , all]);
        setuseRegis({fname: "" , lname: "" , pnumber: "" , email: "" , address: "" , qualification: "" ,age: 0});
    }

    return (
        <div>
            <h2 style = {props.styl} > Normal Registration Form in React with Typscript and Material Ui </h2>
            <hr></hr>
            <br/><br/>
            <form onSubmit={subKa}>
                <TextField type="text" id="standard-basic" label="Enter First Name" variant="filled" name="fname" autoComplete="off" value={useRegis.fname} onChange={hanInp} />
                
                <br/><br/>

                <TextField type="text" id="standard-basic" label="Enter Last Name" variant="filled" name="lname" autoComplete="off" value={useRegis.lname} onChange={hanInp} />

                <br/><br/>

                <TextField type="number" id="standard-basic" label="Enter Phone Number" variant="filled" name="pnumber" autoComplete="off" value={useRegis.pnumber} onChange={hanInp} />

                <br/><br/>

                <TextField type="email" id="standard-basic" label="Enter Email Address" variant="filled" name="email" autoComplete="off" value={useRegis.email} onChange={hanInp} />

                <br/><br/>

                <TextField type="text" id="standard-basic" label="Enter Permanent Address" variant="filled" name="address" autoComplete="off" value={useRegis.address} onChange={hanInp} />

                <br/><br/>

                <TextField type="text" id="standard-basic" label="Enter Highest Qualification" variant="filled" name="qualification" autoComplete="off" value={useRegis.qualification} onChange={hanInp} />

                <br/><br/>

                <TextField type="number" id="standard-basic" label="Enter Age" variant="filled" name="age" autoComplete="off" value={useRegis.age} onChange={hanInp} />

                <br/><br/>

                <Button type="submit" variant="outlined"> Submit </Button>

            </form>

            <div>
                {
                    store.map((curElem , id: number) => {
                        const {fname , lname , pnumber , email , address , qualification , age} = curElem
                        return(
                            <div key={id}>
                                <li><h3>Name is {fname}{lname}, mobile number {pnumber}, mail is {email},
                                 permanent address is {address}, and highest qualification {qualification} and age is {age}</h3></li>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Userregis;