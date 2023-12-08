// ContactUs.js

import React from 'react';

const Contactt = () => {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! For any inquiries or assistance, feel free to get in touch with us.
        </p>
        <div className="contact-details">
          <p>Email: AccessorEase@email.com</p>
          <p>Phone: +1 234-567-8900</p>
          <p>Address: 1234 Street Name, City, Country</p>
        </div>
        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Write your message here"></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contactt;
