import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
// import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
//   const [addUser] = useMutation(ADD_USER);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     const mutationResponse = await addUser({
//       variables: {
//         email: formState.email,
//         password: formState.password,
//         firstName: formState.firstName,
//         lastName: formState.lastName,
//       },
//     });
//     const token = mutationResponse.data.addUser.token;
//     Auth.login(token);
//   };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  return (
    <div className="flex items-center w-full h-screen m-auto bg-[#EDDCD2]">
      <div className='flex flex-col justify-center items-center mx-auto h-auto rounded-md max-w-screen-sm sm:w-[550px] py-8 gap-4'>
      {/* <Link to="/login">← Go to Login</Link> */}
      <h2 className='text-2xl italic'>Register Your Account</h2>
      <form>
      {/* <form onSubmit={handleFormSubmit}> */}
        <div className="flex space-between my-2 gap-4 sm:w-[500px]">
          <input
            className='w-full px-4 py-1'
            placeholder="First Name"
            name="firstName"
            type="firstName"
            id="firstName"
            // onChange={handleChange}
          />
          <input
            className='w-full px-4 py-1'
            placeholder="Last Name"
            name="lastName"
            type="lastName"
            id="lastName"
            // onChange={handleChange}
          />
        </div>
        <div className="flex space-between my-2 gap-4 sm:w-[500px]">
          <input
            className='w-full px-4 py-1'
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            // onChange={handleChange}
          />
          <input
            className='w-full px-4 py-1'
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            // onChange={handleChange}
          />
        </div>
        <div className=" flex space-between">
            <button type="submit" className='flex text-white italic px-3 justify-center items-center mx-auto h-auto bg-[#A5A58D] hover:scale-105 duration-200'>Submit</button>
            <button className='flex text-white italic px-3 py-1 justify-center items-center mx-auto h-auto bg-[#DDBEA9] hover:scale-105 duration-200'>Cancel</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Signup;
