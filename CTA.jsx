/* File: src/components/CTA.js */
import React from 'react';

const CTA = () => {
  return (
    <section className="py-5 text-center" style={{ backgroundColor: 'var(--heading-color)', color: '#fff' }} data-aos="fade-in">
      <div className="container">
        <h2 className="mb-4">Join Us Today</h2>
        <p className="lead mb-4">Unlock your potential, like opening a door to new adventures.</p>
        <a className="btn btn-light btn-lg" href="#">Apply Now</a>
      </div>
    </section>
  );
};

export default CTA;