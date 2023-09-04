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
