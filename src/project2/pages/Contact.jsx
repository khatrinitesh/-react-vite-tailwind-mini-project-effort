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
