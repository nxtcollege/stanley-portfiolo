"use client";
import Image from "next/image";
import { Container } from "./ui/Container";
import { heroIcons, slides } from "@/utils/constant";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const LeftHeroIcons = () => {
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-4 gap-2">
      {heroIcons.map((item, index) => (
        <div className=" flex flex-col items-center" key={index}>
          <div className=" bg-[#D2F2E5] rounded-full flex items-center justify-center w-10 aspect-square">
            {<item.icon />}
          </div>
          <p className=" text-blue-500 font-semibold">{item.title}</p>
          <p className=" max-lg:text-[14px] text-gray-200">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

const NameIntro: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className=" flex flex-col gap-6">
      <p className=" text-white text-4xl md:text-5xl lg:text-7xl font-bold ">
        {title}
      </p>
      <p className=" text-lg lg:text-xl text-gray-200">{subtitle}</p>
      <div className=" flex items-center gap-4">
        <div className=" max-sm:flex-1 max-sm:flex items-center justify-center py-3 sm:px-6 max-md:text-[10px] sm:py-3 bg-blue-500 text-white rounded-3xl">
          <p>Book appointment</p>
        </div>
        <div className=" max-sm:flex-1 max-sm:flex items-center justify-center sm:px-6 py-3 max-md:text-[10px] border-2 border-blue-500 text-gray-200 rounded-3xl">
          <p>Learn more</p>
        </div>
      </div>
    </div>
  );
};

const LeftHero: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className=" flex-1">
      <div className=" px-4 py-2 max-sm:text-[14px] text-gray-200 font-semibold w-fit rounded-2xl bg-blue-500 ">
        <p>Board certified physiotherapists</p>
      </div>
      <div className=" mt-3 flex flex-col gap-4 lg:gap-12">
        <NameIntro title={title} subtitle={subtitle} />
        <LeftHeroIcons />
      </div>
    </div>
  );
};

const RightHero: React.FC<{ imgUrl: string }> = ({ imgUrl }) => {
  return (
    <div className=" flex-1">
      <div className=" w-full aspect-square p-5 md:p-10 border border-gray-400 rounded-2xl">
        <Image
          className=" w-full h-full object-cover opacity-65 rounded-2xl"
          src={imgUrl}
          alt=""
          width={200}
          height={200}
          loading="eager"
        />
      </div>
    </div>
  );
};

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 10000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );
  return (
    <div id="hero" className=" w-full h-fit relative ">
      <Carousel
        plugins={[plugin.current]}
        opts={{ loop: true }}
        className=" w-full h-fit"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem className=" basis-full" key={index}>
              <div
                className={`relative w-full h-fit`}
                style={{
                  backgroundImage: `url(${slide.imagebg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/70 to-green-900/40" />
                <Container className=" flex-col md:flex-row relative z-10 py-10 flex gap-10 md:items-center">
                  <LeftHero title={slide.title} subtitle={slide.subtitle} />
                  <RightHero imgUrl={slide.heroimg} />
                </Container>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Hero;
