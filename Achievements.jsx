/* File: src/components/Achievements.js */
import React, { useEffect, useRef } from 'react';

const Achievements = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((counter) => {
      if (counter) {
        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;
        const increment = target / 200;
        const updateCount = () => {
          if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      }
    });
  }, []);

  return (
    <section className="py-5 glass-effect">
      <div className="container">
        <h2 className="text-center mb-5">Our Achievements</h2>
        <div className="row text-center">
          <div className="col-md-3 mb-4" data-aos="zoom-in">
            <h3 className="counter" data-target="15000" ref={(el) => countersRef.current[0] = el}>0</h3>
            <p>Students</p>
          </div>
          <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="100">
            <h3 className="counter" data-target="500" ref={(el) => countersRef.current[1] = el}>0</h3>
            <p>Faculty</p>
          </div>
          <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="200">
            <h3 className="counter" data-target="95" ref={(el) => countersRef.current[2] = el}>0</h3>
            <p>% Placements</p>
          </div>
          <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="300">
            <h3 className="counter" data-target="10" ref={(el) => countersRef.current[3] = el}>0</h3>
            <p>Ranking</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;