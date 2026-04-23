import React from "react";
import { Container } from "./ui/Container";
import Image from "next/image";
import { aboutDownDiv } from "@/utils/constant";
import { Headings } from "./ui/Headings";
import { LeftHeroIcons } from "./Hero";

const AboutCenterImage = () => {
  return (
    <div className=" flex-1">
      <div className=" w-full px-6 rounded-xl  shadow-2xl aspect-square bg-gray-300">
        <Image
          className=" w-full h-full object-cover object-top"
          src={"/stanley-about.png"}
          alt=""
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

const AboutCenterText = () => {
  return (
    <div className=" flex-1 flex flex-col gap-6">
      <p className=" text-3xl font-semibold text-blue-900">
        A Personal Approach to Physiotherapy
      </p>
      <div className=" flex flex-col gap-3">
        <p>
          Stanley Idoko is a qualified licensed physiotherapist with over 5
          years working experience in his field.
        </p>
        <p>
          An Alumni of prestigious University of Nigeria, who has a range of
          clinical and admistrative work associations.
        </p>
        <p>
          He started his Career in Port Harcourt, Nigeria where he was a team
          player in Soft touch Physiotherapy and Wellness Center,and also did
          volunteering services for different NGOs in UPTH.
        </p>
        <p>
          He relocated to Lagos,and was a part-time locum Staff for Wellpath
          Physiotherapy and Rehabilitation clinic, Amazing Physiotherapy,and
          Primrose Specialist hospital.
        </p>
        <p>
          He currently works in Physiotherapy department, National orthopedic
          hospital Igbobi, Lagos. With a lot of testimonials and wide stream
          patient database, he always advocates for optimal patient recovery,
          functional independence and holistic being.
        </p>
        <p>
          Driven by the growing need for Physiotherapy for productivity, he is
          geared to bringing expert Physiotherapy and care to your
          doorsteps(home, hospital, workplace etc).
        </p>
      </div>
    </div>
  );
};

const AboutCenter = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-10 md:items-center">
      <AboutCenterImage />
      <AboutCenterText />
    </div>
  );
};

const CoreValues = () => {
  return (
    <div className=" lg:px-12 flex flex-col gap-12">
      <div className=" flex md:items-center md:justify-center flex-col">
        <p className=" text-3xl text-blue-900 font-bold">My Core Value</p>
        <p>The principle that guide every patients interaction</p>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
        {aboutDownDiv.map((item, index) => (
          <div
            className=" bg-white rounded-xl p-4 flex flex-col gap-2"
            key={index}
          >
            <p className=" text-blue-900 font-bold">{item.title}</p>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="w-full h-fit bg-[linear-gradient(to_bottom_right,#DCEFFA_60%,#D2F2E5_100%)]">
      <Container>
        <div className=" py-10 md:py-24 flex flex-col gap-20">
          <Headings
            intro="Founder and Team lead"
            heading="Dedicated to your health and wellness"
            subtext="With over many years experience in physical medicine, I am commited to
          providing comprehensive, compassionate, care that address your unique
          health needs and goals"
          />
          <AboutCenter />
          <CoreValues />
          <div className=" md:hidden bg-white py-4 rounded-2xl">
            <LeftHeroIcons isHero={false} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
