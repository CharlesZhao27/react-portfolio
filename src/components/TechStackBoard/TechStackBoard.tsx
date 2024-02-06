import content from "../../assets/content.json";
import SkillCard from "../SkillCard/SkillCard";
import SectionContainer from "../SectionContainer/SectionContainer";
import SectionTitle from "../SectionTitle/SectionTitle";

const tech_stack_content = content["tech_stack"];

const TechStackBoard = () => {
  return (
    <SectionContainer sectionName="tech_stack_section">
      <div className="py-[100px]">
        <SectionTitle title="Tech Stack" classname="mb-5">
          Dive into the array of technologies that power my projects. From
          front-end frameworks to back-end engines, each tool is wielded with
          expertise and precision. Here's where art meets function in the world
          of code.
        </SectionTitle>

        <div className="hidden md:block">
          <div className="flex flex-wrap justify-between px-5">
            {tech_stack_content.map((item, index) => (
              <SkillCard key={index} title={item.title} image={item.image} />
            ))}
          </div>
        </div>

        <div className="block md:hidden">
          <div className="grid grid-cols-3 gap-5 px-5">
            {tech_stack_content.map((item, index) => (
              <div key={index} className="flex items-center justify-start">
                <div className="inline rounded-full w-1/4 border-solid shadow-lg">
                  <img src={item.image} alt="image" className="w-full p-2" />
                </div>
                <span className="ml-4 text-center"> {item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default TechStackBoard;
