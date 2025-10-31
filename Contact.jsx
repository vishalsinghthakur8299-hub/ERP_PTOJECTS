/* File: src/components/Contact.js */
import React from 'react';

const Contact = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h4>Get in Touch</h4>
            <p>
              <i className="bi bi-envelope me-2"></i> info@eliteuni.edu
            </p>
            <p>
              <i className="bi bi-telephone me-2"></i> +1 (123) 456-7890
            </p>
            <p>
              <i className="bi bi-geo-alt me-2"></i> 123 Uni Ave, City, State
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h4>Send a Message</h4>
            <div>
              <input type="text" className="form-control mb-2 glass-effect" placeholder="Name" />
              <input type="email" className="form-control mb-2 glass-effect" placeholder="Email" />
              <textarea className="form-control mb-2 glass-effect" placeholder="Message" rows="4"></textarea>
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;