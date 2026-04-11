import Link from "next/link";
import { Container } from "./ui/Container";
import Image from "next/image";
import { socialFooter } from "@/utils/constant";

const LeftSide = () => {
  return (
    <div className=" flex-1 flex flex-col gap-4">
      <Image
        className=" rounded-2xl opacity-65 w-[70px] sm:w-[100px]"
        src={"/logo-main.jpeg"}
        alt=""
        width={100}
        height={100}
        loading="eager"
      />
    </div>
  );
};
const RightSide = () => {
  return (
    <div className=" flex-1 flex justify-end gap-4">
      {socialFooter.map((item, index) => (
        <Link href={item.link} key={index}>
          {<item.icon className={`text-2xl md:text-4xl text-${item.color}`} />}
        </Link>
      ))}
    </div>
  );
};
const Top = () => {
  return (
    <div className=" flex ">
      <LeftSide />
      <RightSide />
    </div>
  );
};

const Footer = () => {
  return (
    <div className=" bg-gray-50">
      <Container>
        <div className=" py-10 flex flex-col gap-4">
          <Top />
          <div className=" flex flex-col sm:flex-row items-center justify-center gap-1">
            <small className="text-[8px]">
              Copyright © 2026 save a life physiotherapy & Wellness Ltd. All
              rights reserved.
            </small>
            <Link
              className=" flex items-center gap-1"
              target="_blank"
              href={"https://www.nctcfirm.com"}
            >
              <p className=" text-gray-500">Powered by</p>
              <Image
                className=" w-[70px]"
                loading="eager"
                src={"/nctc-logo.png"}
                alt=""
                width={70}
                height={70}
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
