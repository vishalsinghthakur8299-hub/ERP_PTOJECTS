/* File: src/components/Research.js */
import React from 'react';

const Research = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Research at Elite University</h2>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <p className="lead">
              Our research initiatives push the boundaries of knowledge, addressing global challenges in areas like technology, sustainability, and healthcare.
            </p>
            <p>
              From quantum computing to renewable energy, our faculty and students collaborate on groundbreaking projects that drive innovation. Explore our research centers and opportunities to contribute to cutting-edge discoveries.
            </p>
            <a className="btn btn-primary mt-3" href="#">
              Explore Research Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;