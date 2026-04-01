import React from "react";
import { Container } from "./ui/Container";
import { navLinks } from "@/utils/constant";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <p>Logo Here</p>
    </div>
  );
};

const NavItems = () => {
  return (
    <div className=" flex items-center gap-10 font-semibold">
      {navLinks.map((item, index) => (
        <Link href={`#${item}`} key={index}>
          {item}
        </Link>
      ))}
    </div>
  );
};

const NavBar = () => {
  return (
    <div>
      <Container>
        <div className=" w-full h-17.5 bg-white flex items-center justify-between">
          <Logo />
          <NavItems />
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
