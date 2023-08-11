import React from 'react';
import {useState} from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation here
    // You can send the form data to a backend API, for example
  };

  return (
    <div className="contact-container">
     <div className="contact-details"></div>
      <ul className="contact-list">
      <h3>Contact Details</h3>
       <li>
         <i className="bi bi-geo-alt-fill"></i> Physical Address:
         <br />Kasulu Town
         <br />Murubona Area Kigoma,
         <br />Tanzania
       </li>
       <li>
        <i className="bi bi-telephone-inbound-fill"></i> Mobile:
        <br />+255 620 583 841
       </li>
       <li>
       <i className="bi bi-envelope"></i> <a href="mailto:info@flygo.com">info@drst.or.tz</a>
       </li>
    </ul>
    <div className="contact-form">
        <h3>Contact Form</h3>
          <form onSubmit={handleSubmit}>
           <div className="form-group">
           <label htmlFor="name">Name:</label>
           <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
          </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
    </div>
  )
}

export default Contact
