/* File: src/components/TopInfoBar.js */
import React from 'react';

const TopInfoBar = () => {
  return (
    <div className="py-2 border-bottom glass-effect">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <i className="bi bi-envelope me-2"></i> info@eliteuni.edu | <i className="bi bi-telephone me-2"></i> +1 (123) 456-7890
          </div>
          <div className="col-md-6 text-end">
            <a href="#" className="me-3"><i className="bi bi-facebook"></i></a>
            <a href="#" className="me-3"><i className="bi bi-twitter"></i></a>
            <a href="#" className="me-3"><i className="bi bi-instagram"></i></a>
            <a href="#" className=""><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;