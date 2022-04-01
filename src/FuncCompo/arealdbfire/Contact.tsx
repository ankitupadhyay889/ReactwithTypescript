import React, { ChangeEvent, useState } from 'react';
import { TextField , Button } from '@mui/material';

type Infire = {
    uname: string,
    pnumber: string,
    email: string,
    address: string,
}

const Contact = () => {

    const [useRegis, setuseRegis] = useState<Infire>({
        uname: "",
        pnumber: "",
        email: "",
        address: "",
    })

    const hanInp = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value;

        setuseRegis({...useRegis , [name]: value})
    }

    const dataSend = async(e: any) => {
        e.preventDefault();
        const {uname , pnumber , email , address} = useRegis;

        if(uname  && pnumber && email && address){
            const res = await fetch("https://typekliyeproj-default-rtdb.firebaseio.com/reactfireform.json",
            {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    uname,pnumber,email,address
                })
            }
            );
    
            if(res){
                setuseRegis({
                    uname: "",
                    pnumber: "",
                    email: "",
                    address: ""
                });
                alert("Data Stored to Firebase");
            }
    
        }else{
            alert("please fill the data first");
        }
    };

    return (
        <div>
            <h1> FireBase Form RealTime DB. </h1>
            <br/><br/>
            <form method='POST'>
                <TextField type="text" id="standard-basic" label="Enter Name" 
                variant="filled" name="uname" autoComplete="off" value={useRegis.uname} onChange={hanInp} required />

                <br/><br/>

                <TextField type="number" id="standard-basic" label="Enter Phone Number" 
                variant="filled" name="pnumber" autoComplete="off" value={useRegis.pnumber} onChange={hanInp} required />

                <br/><br/>

                <TextField type="email" id="standard-basic" label="Enter Email Address" 
                variant="filled" name="email" autoComplete="off" value={useRegis.email} onChange={hanInp} required />

                <br/><br/>

                <TextField type="text" id="standard-basic" label="Enter Permanent Address" 
                variant="filled" name="address" autoComplete="off" value={useRegis.address} onChange={hanInp} required />

                <br/><br/>

                <Button type="submit" variant="outlined" onClick={dataSend}> Submit </Button>

            </form>
        </div>
    );
};

export default Contact;