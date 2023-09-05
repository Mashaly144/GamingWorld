import React from 'react';
import Hero from '../components/Hero';
import Articles from '../components/Articles';
import Testimonials from '../components/Testimonials';
import Favorites from '../components/Favorites';
import Discover from '../components/Discover';
const HomePage = () => {
  return (
    <div>
      <Hero />
      <Favorites />
      <Discover />
      <Articles />
      <Testimonials />
    </div>
  );
};

export default HomePage;
