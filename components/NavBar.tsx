"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Container } from "./ui/Container";
import { navLinks } from "@/utils/constant";
import Link from "next/link";
import Image from "next/image";
import { RiMenu3Line } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { IoCloseSharp } from "react-icons/io5";

const Logo: React.FC<{
  setShowSheet: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowSheet }) => {
  return (
    <Link onClick={() => setShowSheet(false)} href={"#hero"}>
      <Image
        className=" h-15 aspect-[1.5]"
        src={"/logo.png"}
        alt=""
        width={70}
        height={70}
      />
    </Link>
  );
};

const NavItems: React.FC<{
  setShowSheet: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowSheet }) => {
  return (
    <div className=" flex  items-center flex-col sm:flex-row gap-10 font-semibold">
      {navLinks.map((item, index) => (
        <Link
          onClick={() => setShowSheet(false)}
          href={`#${item.toLowerCase()}`}
          key={index}
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

const MobileHanberger: React.FC<{
  setShowSheet: Dispatch<SetStateAction<boolean>>;
  showSheet: boolean;
}> = ({ showSheet, setShowSheet }) => {
  return (
    <div className=" lg:hidden ">
      <Sheet open={showSheet} onOpenChange={setShowSheet}>
        <SheetContent
          side="top"
          className=" pt-17.5 bg-white w-full h-fit &>button]:hidden pb-2 lg:hidden"
        >
          <SheetHeader>
            <SheetTitle className="hidden"></SheetTitle>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-4 px-4">
            <NavItems setShowSheet={setShowSheet} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const NavBar = () => {
  const [showSheet, setShowSheet] = useState<boolean>(false);
  return (
    <div className=" sticky top-0 left-0 border-b z-999 bg-white">
      <Container>
        <div className=" w-full h-17.5  flex items-center justify-between">
          <Logo setShowSheet={setShowSheet} />
          <div className="hidden sm:flex">
            <NavItems setShowSheet={setShowSheet} />
          </div>
          <MobileHanberger setShowSheet={setShowSheet} showSheet={showSheet} />
          {showSheet ? (
            <IoCloseSharp
              className=" text-3xl sm:hidden"
              onClick={() => setShowSheet(false)}
            />
          ) : (
            <RiMenu3Line
              onClick={() => setShowSheet(true)}
              className=" text-3xl sm:hidden"
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
