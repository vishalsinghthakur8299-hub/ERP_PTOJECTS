/* File: src/components/Footer.js */
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">About</a></li>
              <li><a href="#" className="text-white">Programs</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Contact</h5>
            <p>123 Uni Ave<br />City, State<br />info@eliteuni.edu<br />+1 (123) 456-7890</p>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Social</h5>
            <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Newsletter</h5>
            <form>
              <input type="email" className="form-control mb-2 glass-effect" placeholder="Email" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2025 Elite University.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;