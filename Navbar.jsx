/* File: src/components/Navbar.js */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/" style={{ color: 'var(--heading-color)' }}>
          Elite University
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/programs">
                Programs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admissions">
                Admissions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/research">
                Research
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <NavLink className="btn btn-primary ms-3" to="/admissions">
            Apply Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;