import Contact from "../Dashboard/Contact";
import FamousProject from "../Dashboard/FamousProject";
import Footer from "../Dashboard/Footer";
import Hero from "../Dashboard/Hero";
import Jobs from "../Dashboard/Jobs";
import WhatWeDo from "../Dashboard/WhatWeDo";
import WhoWeAre from "../Dashboard/WhoWeAre";



const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeDo/>
      <FamousProject/>
      <Jobs/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;