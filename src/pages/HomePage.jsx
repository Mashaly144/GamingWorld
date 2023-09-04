import React from "react";
import Hero from "../components/Hero";
import Articles from "../components/Articles";
import { Testimonials } from "../components/Testimonials";
import React from "react";
import Hero from "../components/Hero";
import Articles from "../components/Articles";
import Favorites from "../components/Favorites";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <Favorites />
      <Articles />
      <Testimonials />
    </div>
  );
};

export default HomePage;
