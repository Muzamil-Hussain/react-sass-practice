import React from "react";
import { Footer, Header, Navbar } from "../components";
import { About, Contact, PopularTours, Reviews } from "../containers";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <PopularTours />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
