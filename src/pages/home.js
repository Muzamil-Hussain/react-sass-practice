import React from "react";
import { Footer, Header, Navbar } from "../components";
import { About, PopularTours, Reviews } from "../containers";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <PopularTours />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
