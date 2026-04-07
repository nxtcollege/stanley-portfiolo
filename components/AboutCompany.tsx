import React from "react";
import { Container } from "./ui/Container";
import { Headings } from "./ui/Headings";
import { companyAbout } from "@/utils/constant";
import Image from "next/image";

const EachAbout: React.FC<{
  text: string;
  image: string;
  heading: string;
  position: number;
}> = ({ text, image, heading, position }) => {
  return (
    <div
      className={`flex flex-col sm:flex-row ${position % 2 == 0 && " sm:flex-row-reverse"} gap-10 items-center`}
    >
      <div className=" flex-1 flex flex-col gap-4">
        <p className=" text-xl md:text-3xl font-semibold text-blue-900">
          {heading}
        </p>
        <p className=" md:text-xl">{text}</p>
      </div>
      <div className=" flex-1 max-sm:w-full">
        <div className=" w-full aspect-square rounded-2xl border relative  ">
          <div className=" absolute w-full aspect-square border -top-3 -right-3 md:-top-6 md:-right-6 rounded-2xl overflow-hidden">
            <Image
              className=" w-full h-full object-cover"
              src={image}
              alt=""
              width={200}
              height={200}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutCompany = () => {
  return (
    <div id="about" className=" bg-gray-50">
      <Container>
        <div className=" py-28 flex flex-col gap-10 md:gap-20">
          <Headings
            intro="Save A Life Physiotherapy"
            heading="About Us"
            subtext="At Save a Life Physiotherapy, we help you recover, move better, and live pain-free. Discover how our expert care can make a difference in your daily life."
          />
          <div className=" flex flex-col gap-10 md:gap-20">
            {companyAbout.map((item, index) => (
              <EachAbout
                position={index + 1}
                text={item.text}
                image={item.image}
                key={index}
                heading={item.heading}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutCompany;
