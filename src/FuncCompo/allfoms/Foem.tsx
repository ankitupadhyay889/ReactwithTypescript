import React, { ChangeEvent, useState } from 'react';
import { TextField , Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

const dat = yup.object().shape({
    fullname: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().email().required(),
});

const Foem = () => {
    const {register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(dat),
      });
      
    const [data, setdata] = useState<Object>("")

    const [show, setshow] = useState<Array<any>>([]);

    // const hanInp = (e: any) => {
    //     const name = e.currentTarget.name;
    //     const value = e.currentTarget.value;

    //     setdata({...data , [name]:value })
    // }

    const onSu = (e: any) =>{
        e.preventDefault();
        const sbhi = {...data};
        setshow([...show , sbhi]);
        setdata({fullname: "" , username: "" , email: ""});
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSu)}>
                <TextField {...register("fullname")} type="text" id="standard-basic" label="Enter FullName" variant="filled"
                name="fullname"  />
                <p>{errors.fullname?.message}</p>
                
                <br/><br/>

                <TextField {...register("username")} type="text" id="standard-basic" label="Enter Username" variant="filled"
                name="username"  />
                <p>{errors.username?.message}</p>
                
                <br/><br/>

                <TextField {...register("email")} type="text" id="standard-basic" label="Enter Email" variant="filled"
                name="email"  />
                <p>{errors.email?.message}</p>
                
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

export default Foem;