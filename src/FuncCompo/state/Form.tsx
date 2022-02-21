import React, { useState } from 'react';
import { TextField , Button } from '@mui/material';
import * as Yup from 'yup';

const Form = () => {

    // if i replace any to string it throw error and yup valid not working on both
    const [data, setdata] = useState<any>(() => Yup.object().shape({
        fullname: Yup.string().required("Fullname is required"),
        username: Yup.string().required('Username is required').min(6, 'Username must be at least 6 characters').max(20, 'Username must not exceed 20 characters'),
        email: Yup.string().required('Email is required').email('Email is invalid'),
    }));

    const [show, setshow] = useState<Array<any>>([]);

    const hanInp = (e: any) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        setdata({...data , [name]:value })
    }

    const Sub = (e: any) =>{
        e.preventDefault();
        const sbhi = {...data};
        setshow([...show , sbhi]);
        setdata({fullname: "" , username: "" , email: ""});
    }

    return (
        <div>
            <form onSubmit={Sub}>
                <TextField type="text" id="standard-basic" label="Enter FullName" variant="filled"
                name="fullname" autoComplete="off" value={data.fullname} onChange={hanInp} />
                
                <br/><br/>

                <TextField type="text" id="standard-basic" label="Enter Username" variant="filled"
                name="username" autoComplete="off" value={data.username} onChange={hanInp} />
                
                <br/><br/>

                <TextField type="text" id="standard-basic" label="Enter Email" variant="filled"
                name="email" autoComplete="off" value={data.email} onChange={hanInp} />
                
                <br/><br/>

                <Button type="submit" variant="outlined"> Register </Button>

            </form>
            <div>
                {
                    show.map((curElem , id: number) => {
                        const {fullname , username , email} = curElem
                        return(
                            <div key={id}>
                                <h2> {fullname} -- {username} -- {email} </h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Form;