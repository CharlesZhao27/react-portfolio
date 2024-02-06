import React, { ReactNode } from "react";
import cx from "classnames";

interface Typography {
  children: ReactNode;
  classname?: string;
}

export const Heading1: React.FC<Typography> = ({ children, classname }) => {
  const heading1_style = cx(
    ["font-default text-5xl leading-[4rem]"],
    classname
  );
  return <h1 className={heading1_style}>{children}</h1>;
};

export const Heading1Bold: React.FC<Typography> = ({ children, classname }) => {
  const heading1_style = cx(
    ["font-default text-5xl leading-[4rem] font-bold"],
    classname
  );
  return <h1 className={heading1_style}>{children}</h1>;
};

export const Caption: React.FC<Typography> = ({ children, classname }) => {
  const heading1_style = cx(["font-default"], classname);
  return <p className={heading1_style}>{children}</p>;
};
