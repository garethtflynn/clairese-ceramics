import React, { useState, useRef } from "react";
import { validateEmail } from '../utils/helpers';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [userEmail, setEmail] = useState('');
    const [userName, setName] = useState('');
    const [userMessage, setMessage] = useState('');
    const [emailClasses, setemailClasses] = useState('my-2 p-2 bg-white rounded-md')
    const [nameClasses, setnameClasses] = useState('my-2 p-2 bg-white rounded-md')
    const [messageClasses, setmessageClasses] = useState('my-2 p-2 bg-white rounded-md')
  
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    const form = useRef()
  
    const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'name') {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      setemailClasses("my-4 p-2 bg-neutral-100")
      setnameClasses("my-4 p-2 bg-neutral-100")
      setmessageClasses("my-4 p-2 bg-neutral-100")
  
      if (!validateEmail(userEmail)) {
        setemailClasses('bg-red-200 my-4 p-2')
        setErrorMessage('Please enter a valid email!');
        return;
      }
  
      if (!userName) {
        setnameClasses('bg-red-200 my-4 p-2')
        setErrorMessage(
          'Please enter a name before submitting'
        );
        return;
      }
  
      if (!userMessage) {
        setmessageClasses('bg-red-200 my-4 p-2')
        setErrorMessage(
          `Please enter a message before submitting`
        );
        return;
      }
  
      emailjs.sendForm('service_kzpmai3', 'template_xncloki', form.current, 'wBFFLS68ZtjbdsHtK')
      .then((result) => {
          setSuccessMessage(`Thank you for your message ${userName}. Your message was sent successfully!`)
          console.log(result.text);
      }, (error) => {
          setErrorMessage('There was an error when sending your message')
          console.log(error.text);
          return;
      });
  
      setName('');
      setEmail('');
      setMessage('');
      setErrorMessage('');
    };
  
    return (
      <div name='contact' className='bg-[#EDEDE8] text-black w-full h-screen flex justify-center items-center p-4 z-20'>
          <form ref={form} onSubmit={handleFormSubmit} className='flex flex-col max-w-sm sm:max-w-2xl w-full mx-auto justify-center text-black'>
            <div className='pb-2 items-center'>
              <p className='text-2xl sm:text-3xl font-light italic text-center text-black'>Contact</p>
              <p className='text-left text-black py-2 text-center'>Please submit the form below to send me a message.</p>
            </div>
            <input
              className={nameClasses}
              type='text'
              name='name'
              placeholder='Name'
              value= {userName}
              onChange={handleInputChange}
            />
            <input
              className={emailClasses}
              type='email'
              name='email'
              placeholder='Email'
              value= {userEmail}
              onChange={handleInputChange}
            />
            <textarea
              className={messageClasses}
              name='message'
              rows='10'
              placeholder='Message'
              value= {userMessage}
              onChange={handleInputChange}>
            </textarea>
            {errorMessage && (
              <div>
                <p className="error-text font-bold text-red-600 text-center">{errorMessage}</p>
              </div>
            )}
            {successMessage && (
              <div>
                <p className="error-text font-bold text-green-600 text-center">{successMessage}</p>
              </div>
            )}
            <button className="rounded-md bg-[#A5A58D] text-white italic px-20 py-3 my-5 mx-auto flex items-center shadow hover:shadow-lg m-2">Submit!</button>
          </form>
      </div>
    )
  }
  
  export default Contact