import React, { useState } from "react";

import { useMutation } from "@apollo/client";
// import { Link } from 'react-router-dom';
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
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
    <div className="flex items-center w-full h-screen bg-[#EDDCD2]">
      <div className="flex flex-col justify-center items-center mx-auto h-auto rounded-md max-w-screen-sm sm:w-[550px] py-8 gap-4">
        <h2 className="text-4xl font-light italic">Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2 sm:w-[500px]">
            <input
              className="w-full px-4 py-1"
              placeholder="Email"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2 sm:w-[500px]">
            <input
              className="w-full px-4 py-1"
              placeholder="Password"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
          <div className="flex space-between">
            <button
              type="submit"
              className="flex text-white px-3 justify-center items-center italic mx-auto h-auto bg-[#A5A58D] hover:scale-105 duration-200"
            >
              Sign In
            </button>
            <button
              to="/signup"
              className="flex text-white italic px-3 py-1 justify-center items-center mx-auto h-auto bg-[#DDBEA9] hover:scale-105 duration-200"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
