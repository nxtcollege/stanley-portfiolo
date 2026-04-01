import React from "react";
import { Container } from "./ui/Container";
import Image from "next/image";
import { aboutDownDiv, aboutIcons } from "@/utils/constant";

const AboutHeading = () => {
  return (
    <div className=" flex items-center flex-col gap-3 px-24">
      <p className="text-green-500">ABOUT PT. STANLEY</p>
      <p className=" text-5xl font-bold text-blue-900">
        Dedicated to your health and wellness
      </p>
      <div className=" px-28">
        <p className=" text-center">
          With over 4 year experience in physical medicine, I am commited to
          providing comprehensive, compassionate, care that address your unique
          health needs and goals
        </p>
      </div>
    </div>
  );
};

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
          Physiotherapy focuses on restoring movement, reducing pain, and
          improving overall physical function through personalized care tailored
          to each individual’s lifestyle, needs, and recovery goals.
        </p>
        <p>
          With experience in injury recovery, rehabilitation, and pain
          management, treatments combine hands-on techniques and guided
          exercises to support safe, effective, and lasting recovery.
        </p>
        <p>
          The aim is to empower patients with strength, knowledge, and
          confidence to prevent future injuries, stay active, and maintain a
          healthy, independent, and pain-free lifestyle.
        </p>
      </div>
    </div>
  );
};

const AboutCenter = () => {
  return (
    <div className=" flex gap-10 items-center">
      <AboutCenterImage />
      <AboutCenterText />
    </div>
  );
};

const AboutQualifications = () => {
  return (
    <div className=" grid grid-cols-4 gap-3 px-12">
      {aboutIcons.map((item, index) => (
        <div
          className=" bg-white rounded-xl p-6 flex flex-col gap-3"
          key={index}
        >
          <div className=" w-12 aspect-square bg-[#DCEFFA] flex items-center justify-center text-green-700 rounded-xl">
            {<item.icon />}
          </div>
          <p className=" text-blue-900 font-bold text-lg">{item.title}</p>
          <ul className=" list-disc text-[14px]">
            {item.subtitle.map((lists, index) => (
              <li key={index}>{lists}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const CoreValues = () => {
  return (
    <div className=" px-12 flex flex-col gap-12">
      <div className=" flex items-center justify-center flex-col">
        <p className=" text-3xl text-blue-900 font-bold">My Core Value</p>
        <p>The principle that guide every patients interaction</p>
      </div>
      <div className=" grid grid-cols-2 gap-4">
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
        <div className=" py-24 flex flex-col gap-20">
          <AboutHeading />
          <AboutCenter />
          <AboutQualifications />
          <CoreValues />
        </div>
      </Container>
    </div>
  );
};

export default About;
