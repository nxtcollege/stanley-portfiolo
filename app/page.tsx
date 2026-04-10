import About from "@/components/About";
import AboutCompany from "@/components/AboutCompany";
import Booking from "@/components/Booking";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonies from "@/components/Testimonies";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <Hero />
      <AboutCompany />
      <Services />
      <Booking />
      <About />
      <Testimonies />
    </React.Fragment>
  );
};

export default page;
