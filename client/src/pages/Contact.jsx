import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_lqlnflr',
      'template_e6pw1vk',
      form.current, 
      process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        }, 
        (error) => {
            console.log(error.text);
        }
      );
  };

  return (
    <div name='contact' className='bg-[#EDEDE8] text-black w-full h-screen flex justify-center items-center p-4 z-20'>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-sm sm:max-w-2xl w-full mx-auto justify-center text-black'>
        <div className='pb-2 items-center'>
          <p className='text-2xl sm:text-3xl font-light italic text-center text-black'>Contact</p>
          <p className='text-left text-black py-2 text-center'>Please submit the form below to send me a message.</p>
        </div>
        <input type="text" name="user_name" placeholder='Name' className='rounded-md my-2 px-2 py-2'/>
        <input type="email" name="user_email" placeholder='Email' className='rounded-md my-2 px-2 py-2'/>
        <textarea name="message" rows='5' placeholder='Message' className='rounded-md my-2 px-2 py-2'/>
        <input type="submit" value="Send" className="rounded-md bg-[#A5A58D] text-white italic px-20 py-2 my-5 mx-auto flex items-center shadow hover:shadow-lg m-2"/>
      </form>
    </div>
  );
};

export default Contact;