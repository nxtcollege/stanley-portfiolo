import Image from "next/image";
import { Container } from "./ui/Container";
import { heroIcons } from "@/utils/constant";

const LeftHeroIcons = () => {
  return (
    <div className=" grid grid-cols-4">
      {heroIcons.map((item, index) => (
        <div className=" flex flex-col items-center" key={index}>
          <div className=" bg-[#D2F2E5] rounded-full flex items-center justify-center w-10 aspect-square">
            {<item.icon />}
          </div>
          <p className=" text-blue-900 font-semibold">{item.title}</p>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

const NameIntro = () => {
  return (
    <div className=" flex flex-col gap-6">
      <p className=" text-blue-900 text-7xl font-bold">
        Pt. Stanley <br /> Ugwuoke
      </p>
      <p className=" text-xl">
        We provide expert physiotherapy care focused on restoring movement,
        reducing pain, and improving your quality of life. Through personalized
        treatment and support, we help you recover faster and move confidently
        every day.
      </p>
      <div className=" flex items-center gap-4">
        <div className=" px-6 py-3 bg-blue-900 text-white rounded-3xl">
          <p>Book appointment</p>
        </div>
        <div className=" px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-3xl">
          <p>Learn more</p>
        </div>
      </div>
    </div>
  );
};

const LeftHero = () => {
  return (
    <div className="flex-1">
      <div className=" px-4 py-2 text-green-500 font-semibold w-fit rounded-2xl bg-[#DCEFFA]">
        <p>Board certified physiotherapist</p>
      </div>
      <div className=" mt-3 flex flex-col gap-12">
        <NameIntro />
        <LeftHeroIcons />
      </div>
    </div>
  );
};

const RightHeror = () => {
  return (
    <div className="flex-1">
      <Image
        className=" w-full object-cover object-top"
        src="/stanley-hero.png"
        alt=""
        width={200}
        height={200}
      />
    </div>
  );
};

const Hero = () => {
  return (
    <div className=" w-full h-fit bg-linear-to-br from-[#DCEFFA] via-[#E8F6F2] to-[#D2F2E5] ">
      <Container>
        <div className=" flex items-center gap-5 pt-20">
          <LeftHero />
          <RightHeror />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
