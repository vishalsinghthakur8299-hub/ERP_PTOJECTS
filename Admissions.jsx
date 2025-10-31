/* File: src/components/Admissions.js */
import React from 'react';

const Admissions = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Admissions</h2>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <p className="lead">
              Join Elite University and start your journey toward a bright future. Our admissions process is designed to identify passionate and talented individuals ready to make a difference.
            </p>
            <p>
              We offer a streamlined application process with clear deadlines and requirements. Whether you're applying for undergraduate, postgraduate, or research programs, our team is here to support you every step of the way.
            </p>
            <a className="btn btn-primary mt-3" href="#">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;