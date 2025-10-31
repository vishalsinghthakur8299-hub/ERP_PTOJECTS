/* File: src/components/Programs.js */
import React from 'react';

const Programs = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Programs</h2>
        <div className="row">
          <div className="col-md-4 mb-4" data-aos="fade-right">
            <div className="card text-center h-100">
              <div className="card-body">
                <i className="bi bi-book display-4 mb-3" style={{ color: 'var(--heading-color)' }}></i>
                <h5 className="card-title">Undergraduate</h5>
                <p className="card-text">Base building, like learning to ride a bike before racing.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="fade-up">
            <div className="card text-center h-100">
              <div className="card-body">
                <i className="bi bi-graduation display-4 mb-3" style={{ color: 'var(--accent-green)' }}></i>
                <h5 className="card-title">Postgraduate</h5>
                <p className="card-text">Advanced skills, like upgrading from a bike to a car.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="fade-left">
            <div className="card text-center h-100">
              <div className="card-body">
                <i className="bi bi-search display-4 mb-3" style={{ color: 'var(--accent-yellow)' }}></i>
                <h5 className="card-title">Research</h5>
                <p className="card-text">Discovery, like exploring new lands as an adventurer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;