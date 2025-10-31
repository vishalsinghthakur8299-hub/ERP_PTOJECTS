/* File: src/components/Home.js */
import React from 'react';
// import HeroCarousel from './HeroCarousel';
import Announcements from './Announcements';
import UpcomingEvents from './UpcomingEvents';
import Achievements from './Achievements';
import Programs from './Programs';
// import Testimonials from './Testimonials';
import News from './News';
import CTA from './CTA';

const Home = () => {
  return (
    <>
      {/* <HeroCarousel /> */}
      <Announcements />
      <UpcomingEvents />
      <Achievements />
      <Programs />
      {/* <Testimonials /> */}
      <News />
      <CTA />
    </>
  );
};

export default Home;