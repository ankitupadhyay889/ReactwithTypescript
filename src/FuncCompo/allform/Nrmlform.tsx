import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// in this yup validation work but you have to use like this form or you want controlled then it not work on yup.
// best eg are formyp with yup valid and yup valid with controlled but not work throw error on submit the form

const Nrmlform = () => {
  const {register , handleSubmit , formState: { errors }} = useForm();

  const [data, setdata] = useState<string | number>()

  const onSubmit = (data: any) => {
      setdata(JSON.stringify(data))
  }; 

  return (
      <div>
        <p> {data} </p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} />
        <br/>
        <input {...register('lastName', { required: true })} />
        {errors.lastName && <p>Last name is required.</p>}
        <br/>
        <input {...register('age', { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>}
        <br/>
        <button type="submit">Submit</button>
        </form>
      </div>
  );
}

export default Nrmlform;