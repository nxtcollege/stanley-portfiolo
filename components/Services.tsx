import React from "react";
import { Container } from "./ui/Container";
import { Headings } from "./ui/Headings";
import { physiotherapyServices, steps } from "@/utils/constant";

const Phases = () => {
  return (
    <div className=" lg:px-20">
      <div className=" py-8 px-6 bg-linear-to-br from-blue-900  to-[#b7f4db] rounded-2xl flex flex-col gap-4 sm:gap-10">
        <div className=" flex items-center justify-center flex-col">
          <p className=" text-2xl text-white font-semibold">
            Your care journey
          </p>
          <p className=" text-white">
            A streamlined process designed with your comfort and health in mind
          </p>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((item, index) => (
            <div key={index}>
              <p className=" text-4xl md:text-5xl font-bold text-gray-200 opacity-50">
                {item.phase}
              </p>
              <p className=" text-white font-bold">{item.name}</p>
              <p className=" text-[12px] sm:text-[14px] text-white">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ListOfServces = () => {
  return (
    <div className=" lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {physiotherapyServices.map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            className=" bg-linear-to-br from-[#DCEFFA] via-[#E8F6F2] to-[#D2F2E5] p-4 rounded-xl flex flex-col gap-2"
            key={index}
          >
            <div className=" w-10 h-10 rounded-sm flex items-center justify-center bg-white text-green-500">
              {<Icon />}
            </div>
            <p className=" text-blue-900 font-semibold">{service.title}</p>
            <p className="text-[14px]">{service.description}</p>
            <ul className=" list-disc pl-5 space-y-1 text-[14px]">
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const Services = () => {
  return (
    <div id="service" className=" bg-white">
      <Container>
        <div className=" py-10 md:py-24 flex flex-col gap-10 md:gap-20">
          <Headings
            intro="COMPREHENSIVE CARE"
            heading="Physiotherapy Service"
            subtext="From preventice care to chronic disease management, I offer a full spectrum of physiotherapy services to meet your healthcare needs at every stage of life"
          />
          <ListOfServces />
          <Phases />
        </div>
      </Container>
    </div>
  );
};

export default Services;
