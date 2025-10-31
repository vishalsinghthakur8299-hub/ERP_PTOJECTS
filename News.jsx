/* File: src/components/News.js */
import React from 'react';

const News = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Latest News</h2>
        <div className="row">
          <div className="col-md-4 mb-4" data-aos="flip-left">
            <div className="card h-100">
              <img src="https://www.nasdaq.com/sites/acquia.prod/files/styles/720x400/public/2019-08/technology10.jpg?h=e970c49e&itok=EIOoRtSG" className="card-img-top" alt="Quantum computing setup." />
              <div className="card-body">
                <h5 className="card-title">Quantum Breakthrough</h5>
                <p className="card-text">New discoveries, like unlocking a secret code.</p>
                <a href="#" className="btn btn-outline-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="flip-up">
            <div className="card h-100">
              <img src="https://images.unsplash.com/photo-1503551723145-6c040742065b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="card-img-top" alt="Award ceremony." />
              <div className="card-body">
                <h5 className="card-title">Student Award</h5>
                <p className="card-text">Global recognition, like winning a trophy.</p>
                <a href="#" className="btn btn-outline-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="flip-right">
            <div className="card h-100">
              <img src="https://www.shutterstock.com/image-photo/global-tech-startup-innovates-connect-600nw-2469041697.jpg" className="card-img-top" alt="Campus construction." />
              <div className="card-body">
                <h5 className="card-title">Expansion</h5>
                <p className="card-text">New buildings, like growing a city.</p>
                <a href="#" className="btn btn-outline-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;