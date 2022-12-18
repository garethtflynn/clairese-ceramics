import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth'; 

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
        <h2 className='text-4xl font-light italic'>Login</h2>
        <form onSubmit={handleFormSubmit} className='flex flex-col justify-center text-black'>
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
          {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null}
          <div className="flex space-between grid grid-cols-1 sm:grid-cols-2">
            <button type="submit" className='rounded-md bg-[#A5A58D] text-white italic px-20 py-2 my-2 mx-auto flex items-center shadow hover:shadow-lg ml-0'>Sign In</button>
            <Link to="/signup"><button className='rounded-md bg-[#DDBEA9] text-white italic px-20 py-2 my-2 mx-auto flex items-center shadow hover:shadow-lg mr-0'>Sign Up</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;