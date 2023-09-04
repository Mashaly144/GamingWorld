import React from "react";
import Hero from "../components/Hero";
import Articles from "../components/Articles";
import { Testimonials } from "../components/Testimonials";
const HomePage = () => {
  return (
    <div>
      <Hero />

      <Articles />
      <Testimonials />
    </div>
  );
};

export default HomePage;
