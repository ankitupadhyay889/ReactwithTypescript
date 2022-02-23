import React, { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

const Nrmlform = () => {
  const {register,handleSubmit,formState: { errors }} = useForm();

  const [data, setdata] = useState({
      name: "",
      lastname: "",
      age: 0
  });

  const haC = (e: ChangeEvent<HTMLInputElement>) => {
      const name = e.target.name;
      const value = e.target.value;

      setdata({...data , [name]: value})
  }

  const onSubmit = (data: any) => {
      console.log(setdata(data));
  }; 

  return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} name="name" value={data.name} onChange={haC} />
        <br/>
        <input {...register('lastName', { required: true })} name="lastname" value={data.lastname} onChange={haC} />
        {errors.lastName && <p>Last name is required.</p>}
        <br/>
        <input {...register('age', { pattern: /\d+/ })} name="age" value={data.age} onChange={haC} />
        {errors.age && <p>Please enter number for age.</p>}
        <br/>
        <button type="submit">Submit</button>
        </form>
      </div>
  );
}

export default Nrmlform;