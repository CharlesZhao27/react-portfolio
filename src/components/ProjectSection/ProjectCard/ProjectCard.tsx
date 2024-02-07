import React from "react";
import { GithubIcon } from "../../Icons/Icons";
import { Heading3Bold } from "../../Typography/Typography";

interface Props {
  image: string;
  githubLink: string;
  projectName: string;
  summary: string[];
}

const ProjectCard: React.FC<Props> = ({
  image,
  githubLink,
  summary,
  projectName,
}) => {
  return (
    <div className=" border border-solid rounded-2xl  overflow-hidden flex items-center shadow-lg gap-5">
      <img src={image} alt="image" className="w-[250px] hidden lg:block" />
      <div className="flex flex-col border-r solid border-gray-400 p-5 w-2/3">
        <div className=" flex items-center justify-start">
          <Heading3Bold>
            <span>
              <img
                src={image}
                alt="image"
                className="w-[40px] inline rounded-full mr-3 lg:hidden"
              />
            </span>
            {projectName}
          </Heading3Bold>
        </div>
        <ul className="font-default max-h-[300px] h-auto overflow-scroll grid grid-cols-1 gap-5">
          {summary.map((item, index) => (
            <li key={index} className=" list-disc">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/5">
        <div className="flex justify-start items-center font-default">
          <span className="w-[100px]">Github Repo:</span>
          <GithubIcon href={githubLink} />
        </div>
        <div className="flex justify-start items-center font-default">
          <span className="w-[100px]">Live Demo:</span>
          <GithubIcon href={githubLink} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
