/* File: src/components/HeroCarousel.js */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HeroCarousel = () => {
  return (
    <Carousel id="heroCarousel" fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://psitche.ac.in/assets/psit-bulding.webp"
          alt="Beautiful university campus building at dusk, evoking a sense of opportunity and growth."
        />
        <Carousel.Caption className="d-none d-md-block text-center glass-effect">
          <h1 className="display-4">Welcome to Elite University</h1>
          <p className="lead">Where dreams turn into achievements, like planting a seed and watching it grow into a tree.</p>
          <a className="btn btn-primary me-2" href="#">Apply Now</a>
          <a className="btn btn-outline-primary" href="#">Explore</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blog.careerguide.com/wp-content/uploads/2023/01/Untitled-design-1-1024x576.png"
          alt="Students collaborating on campus, symbolizing teamwork like in a sports team."
        />
        <Carousel.Caption className="d-none d-md-block text-center glass-effect">
          <h1 className="display-4">Discover Your Path</h1>
          <p className="lead">Growth through knowledge, like exercising your brain at the gym.</p>
          <a className="btn btn-primary me-2" href="#">Apply Now</a>
          <a className="btn btn-outline-primary" href="#">Explore</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://axiscolleges.org/wp-content/uploads/2022/12/3-768x512.jpg"
          alt="Research lab with equipment, representing innovation like inventors in a workshop."
        />
        <Carousel.Caption className="d-none d-md-block text-center glass-effect">
          <h1 className="display-4">Innovate the Future</h1>
          <p className="lead">Optimism in every discovery, like finding treasure in a map quest.</p>
          <a className="btn btn-primary me-2" href="#">Apply Now</a>
          <a className="btn btn-outline-primary" href="#">Explore</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;