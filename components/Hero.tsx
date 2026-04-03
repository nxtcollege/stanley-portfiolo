import Image from "next/image";
import { Container } from "./ui/Container";
import { heroIcons } from "@/utils/constant";

const LeftHeroIcons = () => {
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-4 gap-2">
      {heroIcons.map((item, index) => (
        <div className=" flex flex-col items-center" key={index}>
          <div className=" bg-[#D2F2E5] rounded-full flex items-center justify-center w-10 aspect-square">
            {<item.icon />}
          </div>
          <p className=" text-blue-900 font-semibold">{item.title}</p>
          <p className=" max-lg:text-[14px]">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

const NameIntro = () => {
  return (
    <div className=" flex flex-col gap-6">
      <p className=" text-blue-900 text-4xl md:text-5xl lg:text-7xl font-bold">
        Pt. Stanley <br className=" hidden md:flex" /> Ugwuoke
      </p>
      <p className=" text-lg lg:text-xl">
        We provide expert physiotherapy care focused on restoring movement,
        reducing pain, and improving your quality of life. Through personalized
        treatment and support, we help you recover faster and move confidently
        every day.
      </p>
      <div className=" flex items-center gap-4">
        <div className=" max-sm:flex-1 max-sm:flex items-center justify-center py-3 sm:px-6 sm:py-3 bg-blue-900 text-white rounded-3xl">
          <p>Book appointment</p>
        </div>
        <div className=" max-sm:flex-1 max-sm:flex items-center justify-center sm:px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-3xl">
          <p>Learn more</p>
        </div>
      </div>
    </div>
  );
};

const LeftHero = () => {
  return (
    <div className="flex-1">
      <div className=" px-4 py-2 max-sm:text-[14px] text-green-500 font-semibold w-fit rounded-2xl bg-[#DCEFFA]">
        <p>Board certified physiotherapist</p>
      </div>
      <div className=" mt-3 flex flex-col gap-4 lg:gap-12">
        <NameIntro />
        <LeftHeroIcons />
      </div>
    </div>
  );
};

const RightHeror = () => {
  return (
    <div className="flex-1">
      <div className=" w-full aspect-square md:aspect-auto xl:aspect-square">
        <Image
          className=" w-full h-full object-cover object-top"
          src="/stanley-hero.png"
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
  return (
    <div className=" w-full h-fit bg-linear-to-br from-[#DCEFFA] via-[#E8F6F2] to-[#D2F2E5] ">
      <Container>
        <div className=" flex flex-col md:flex-row md:items-center gap-5 py-10  lg:py-20 ">
          <LeftHero />
          <RightHeror />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
