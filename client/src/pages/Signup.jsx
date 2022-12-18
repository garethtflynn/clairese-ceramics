import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="bg-[#EDDCD2] text-black h-screen flex justify-center items-center">
      <div className='flex flex-col justify-center items-center rounded-md gap-4'>
      <h2 className='text-4xl font-light italic'>Register Your Account</h2>
      <form onSubmit={handleFormSubmit} className='flex flex-col justify-center text-black'>
        <div className="flex-row space-between my-2">
          <input
            className='w-full px-2 py-2 rounded-md'
            placeholder="First Name"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <input
            className='w-full px-2 py-2 rounded-md'
            placeholder="Last Name"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <input
            className='w-full px-2 py-2 rounded-md'
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <input
            className='w-full px-2 py-2 rounded-md'
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex space-between grid grid-cols-1 sm:grid-cols-2">
          <button type="submit" className='rounded-md bg-[#A5A58D] text-white italic px-20 py-2 my-2 mx-auto flex items-center shadow hover:shadow-lg ml-0'>Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Signup;
