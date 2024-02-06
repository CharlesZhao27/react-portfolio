import SectionContainer from "../SectionContainer/SectionContainer";
import React from "react";
import cx from "classnames";
import { Caption, Heading1Bold } from "../Typography/Typography";

interface Props {}

interface HeroTextProps {
  className?: string;
}

const HeroText: React.FC<HeroTextProps> = ({ className }) => {
  return (
    <div
      className={cx(
        ["relative w-full lg:w-[60%] text-justify font-default"],
        className
      )}
    >
      <div>
        <Heading1Bold>Software Developer</Heading1Bold>
        <Heading1Bold>Creative Designer</Heading1Bold>
        <Heading1Bold>Agile Learner</Heading1Bold>
        <Heading1Bold>Bring Concepts into Reality</Heading1Bold>
      </div>
      <Caption classname="text-gray-500">
        Having recently graduated from university, I am on a mission to craft
        innovative solutions at the intersection of technology and design. With
        a keen eye for detail and a relentless pursuit of excellence, I am
        passionate about pushing boundaries and continuously learning to shape
        the future of the digital landscape. Together, let's innovate and create
        something truly remarkable.
      </Caption>
    </div>
  );
};

const HeroSection: React.FC<Props> = () => {
  return (
    <SectionContainer sectionName="about_me_section" classnames="bg-[#f1faf4]">
      <div className="relative py-[200px] px-5 lg:px-0">
        <HeroText className="relative z-50 pl-10 lg:pl-5" />
        <img
          src="src/assets/hero-image.png"
          alt="hero-img"
          className=" absolute w-1/2 lg:w-1/2 lg:top-[20%] top-[25%] right-0 z-1"
        />
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
