import { clsx } from "clsx";
import React from "react";

interface IContainer {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className, ...props }: IContainer) => {
  return (
    <div
      className={clsx(
        " max-w-300 mx-auto px-4 sm:px-10 md:px-12 xl:px-16 2xl:px24",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
