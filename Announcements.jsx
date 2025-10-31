/* File: src/components/Announcements.js */
import React from 'react';

const Announcements = () => {
  return (
    <section className="py-4 glass-effect" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-3">Announcements</h2>
        <marquee direction="left" behavior="scroll" scrollamount="5" className="p-3">
          <span className="me-5" style={{ color: 'var(--accent-yellow)' }}>Admission Deadline: October 15th!</span>
          <span className="me-5" style={{ color: 'var(--accent-yellow)' }}>AI Webinar - Register Now.</span>
          <span className="me-5" style={{ color: 'var(--accent-yellow)' }}>Campus Maintenance: Sept 30.</span>
        </marquee>
      </div>
    </section>
  );
};

export default Announcements;