import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { FormGroup } from '@mui/material';
import Button from "@mui/material/Button";

const UserForm = (props: any) => {
  const [state, setState] = useState({
    username: '',
    email: '',
    city: '',
    phone: ''
  });

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    props.history.push({
      pathname: '/details',
      state
    });
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setState((prevState) => ({...prevState,[name]: value}));
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form className="register-form" onSubmit={handleOnSubmit}>
        <FormGroup id="username">
          <TextField id="outlined-basic" label="Username" variant="outlined" 
          type="text" placeholder="Enter username" name="username" onChange={handleInputChange}/>
        </FormGroup>
        <FormGroup id="email">
          <TextField id="outlined-basic" label="Email" variant="outlined"
          type="email" placeholder="Enter email" name="email" onChange={handleInputChange}/>
        </FormGroup>
        <FormGroup id="city">
          <TextField id="outlined-basic" label="City" variant="outlined"
          type="text" placeholder="Enter city" name="city" onChange={handleInputChange}/>
        </FormGroup>
        <FormGroup id="phone">
          <TextField id="outlined-basic" label="Phone" variant="outlined"
          type="text" placeholder="Enter phone" name="phone" onChange={handleInputChange}/>
        </FormGroup>
        <Button variant="contained" type="submit">Register</Button>
      </form>
    </div>
  );
};

export default UserForm;