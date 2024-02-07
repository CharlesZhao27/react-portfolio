import React from "react";
import SectionContainer from "../SectionContainer/SectionContainer";
import ProjectCard from "./ProjectCard/ProjectCard";
import content from "../../assets/content.json";
import SectionTitle from "../SectionTitle/SectionTitle";

const projects = content["project"];

interface Props {}

const ProjectSection: React.FC<Props> = () => {
  return (
    <SectionContainer sectionName="project_section" classnames="">
      <div className="py-[100px]">
        <SectionTitle title="Projects">
          Dive into the array of technologies that power my projects. From
          front-end frameworks to back-end engines, each tool is wielded with
          expertise and precision. Here's where art meets function in the world
          of code.
        </SectionTitle>

        <div className="grid grid-cols-1 gap-5 py-20">
          {projects.map((project, index) => (
            <ProjectCard
              image={project.image}
              key={index}
              projectName={project.project_name}
              githubLink={project.github_link}
              summary={project.summary}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProjectSection;
