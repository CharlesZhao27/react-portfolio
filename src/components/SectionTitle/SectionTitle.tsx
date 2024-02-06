import cx from "classnames";
import React, { ReactNode } from "react";
import { Heading1, Heading1Bold } from "../Typography/Typography";

interface Props {
  title: string;
  subheading?: string;
  children: ReactNode;
  classname?: string;
}

const SectionTitle: React.FC<Props> = ({
  title,
  children,
  subheading,
  classname,
}) => {
  return (
    <div className={cx(["w-2/3 text-center mx-auto"], classname)}>
      {subheading && <Heading1>{subheading}</Heading1>}
      <Heading1Bold classname="text-[#0f9949]">{title}</Heading1Bold>
      <div className="text-grey">{children}</div>
    </div>
  );
};

export default SectionTitle;
