import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  sectionName: string;
  classnames?: string;
}

const SectionContainer: React.FC<Props> = ({
  children,
  classnames,
  sectionName,
}) => {
  return (
    <section id={sectionName} className={classnames}>
      <div className=" max-w-[1400px] w-full mx-auto">{children}</div>
    </section>
  );
};

export default SectionContainer;
