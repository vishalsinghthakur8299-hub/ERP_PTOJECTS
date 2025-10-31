/* File: src/components/About.js */
import React from 'react';

const About = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">About Elite University</h2>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <p className="lead">
              Elite University is a premier institution dedicated to fostering academic excellence, innovation, and global impact. Founded with a vision to empower future leaders, we provide a transformative educational experience that blends rigorous academics with real-world applications.
            </p>
            <p>
              Our vibrant campus community encourages collaboration, creativity, and critical thinking. With world-class faculty, cutting-edge research facilities, and a commitment to sustainability, we prepare students to thrive in a rapidly changing world.
            </p>
            <a className="btn btn-primary mt-3" href="/admissions">
              Learn More About Admissions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;