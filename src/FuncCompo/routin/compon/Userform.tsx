import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { FormGroup } from '@mui/material';
import Button from "@mui/material/Button";
import "../../../App.css";
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [state, setState] = useState({
    username: '',
    email: '',
    city: '',
    phone: ''
  });

  const hanOt = useNavigate();
  const datasend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    hanOt("/dimm" , {state})
  }

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setState((prevState) => ({...prevState,[name]: value}));
  };

  return (
    <div className='container'>
      <h1>Registration Form</h1>
      <form className="register-form" onSubmit={datasend}>
        <FormGroup id="username">
          <TextField id="standard-basic" label="Username" variant="standard" 
          type="text" placeholder="Enter username" name="username" onChange={handleInputChange}/>
        </FormGroup>
        <FormGroup id="email">
          <TextField id="standard-basic" label="Email" variant="standard"
          type="email" placeholder="Enter email" name="email" onChange={handleInputChange}/>
        </FormGroup>
        <FormGroup id="city">
          <TextField id="standard-basic" label="City" variant="standard"
          type="text" placeholder="Enter city" name="city" onChange={handleInputChange}/>
        </FormGroup>
        <FormGroup id="phone">
          <TextField id="standard-basic" label="Phone" variant="standard"
          type="text" placeholder="Enter phone" name="phone" onChange={handleInputChange}/>
        </FormGroup>
        <Button variant="contained" type="submit">Register</Button>
      </form>
    </div>
  );
};

export default UserForm;