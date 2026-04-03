import About from "@/components/About";
import Booking from "@/components/Booking";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Services />
      <Booking />
    </React.Fragment>
  );
};

export default page;
