<<<<<<< HEAD
import React from 'react';
import { Outlet,NavLink } from 'react-router-dom';

export default function Contact() {
  return (
    <div className='mainContent'>
      <h3>Contact</h3>
      <NavLink to="contact-us">Contact us - </NavLink>
      <NavLink to="address">Address</NavLink>
      <Outlet/>
    </div>
  )
}
=======
import React from "react";

const Contact = () => {
  return <div>Contact</div>;
};

export default Contact;
>>>>>>> ebb224036cd95f0a07d3671d69bb0b8e70c79d80
