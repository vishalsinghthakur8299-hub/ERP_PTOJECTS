/* File: src/components/Testimonials.js */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Testimonials = () => {
  return (
    <section className="py-5 glass-effect">
      <div className="container">
        <h2 className="text-center mb-5">Testimonials</h2>
        <Carousel id="testimonialCarousel" fade>
          <Carousel.Item>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="rounded-circle mb-3" alt="Student portrait 1" />
              <p className="lead">"Transformed my life, like finding a mentor."</p>
              <h5>- Alex</h5>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="rounded-circle mb-3" alt="Student portrait 2" />
              <p className="lead">"Best decision, like choosing the right path in a maze."</p>
              <h5>- Sarah</h5>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="rounded-circle mb-3" alt="Student portrait 3" />
              <p className="lead">"Inspiring community, like a supportive family."</p>
              <h5>- Mike</h5>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;