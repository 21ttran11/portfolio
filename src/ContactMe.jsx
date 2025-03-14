import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:academic21ttran11@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;
  };

  return (
    <div className="contact-me">
      <h3><span className = 'red'>Contact Me ↓</span></h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea className = 'message' name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send!</button>
      </form>
    </div>
  );
};

export default ContactMe;
