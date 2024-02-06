import React from "react";
import styles from "./TechStackBoard.module.css";

const tech_stack_content = [
  {
    title: "JavaScript",
    image: "src/assets/icons/javascript.svg",
    experience: "",
  },
  {
    title: "TypeScript",
    image: "src/assets/icons/typescript.svg",
    experience: "",
  },
  {
    title: "C",
    image: "src/assets/icons/c.svg",
    experience: "",
  },
  {
    title: "CSS",
    image: "src/assets/icons/css.svg",
    experience: "",
  },
  {
    title: "HTML",
    image: "src/assets/icons/html.svg",
    experience: "",
  },
  {
    title: "Java",
    image: "src/assets/icons/java.svg",
    experience: "",
  },
  {
    title: "Springboot",
    image: "src/assets/icons/springboot.svg",
    experience: "",
  },
  {
    title: "React",
    image: "src/assets/icons/react.svg",
    experience: "",
  },
  {
    title: "Next.js",
    image: "src/assets/icons/nextjs.svg",
    experience: "",
  },
  {
    title: "Tailwind CSS",
    image: "src/assets/icons/tailwindcss.svg",
    experience: "",
  },
  {
    title: "Redux",
    image: "src/assets/icons/redux.svg",
    experience: "",
  },
  {
    title: "node.js",
    image: "src/assets/icons/nodejs.svg",
    experience: "",
  },
  {
    title: "PostgreSQL",
    image: "src/assets/icons/postgreSQL.svg",
    experience: "",
  },
  {
    title: "Prisma",
    image: "src/assets/icons/prisma.svg",
    experience: "",
  },
  {
    title: "Docker",
    image: "src/assets/icons/docker.svg",
    experience: "",
  },
  {
    title: "AWS",
    image: "src/assets/icons/aws.svg",
    experience: "",
  },
  {
    title: "Postman",
    image: "src/assets/icons/postman.svg",
    experience: "",
  },
  {
    title: "Git",
    image: "src/assets/icons/git.svg",
    experience: "",
  },
  {
    title: "Jenkins",
    image: "src/assets/icons/jenkins.svg",
    experience: "",
  },
  {
    title: "Python",
    image: "src/assets/icons/python.svg",
    experience: "",
  },
];

interface SkillCardProps {
  title: string;
  image: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, image }) => {
  return (
    <div className={styles.skillCardContainer}>
      <img src={image} className={styles.skillImage} />
      <div>{title}</div>
    </div>
  );
};

const TechStackBoard = () => {
  return (
    <div>
      <section id="tech_stack_section" className={styles.container}>
        <div className={styles.textWrapper}>
          <span className={styles.title}>Tech Stack</span>
          <div className={styles.caption}>
            Dive into the array of technologies that power my projects. From
            front-end frameworks to back-end engines, each tool is wielded with
            expertise and precision. Here's where art meets function in the
            world of code.
          </div>
        </div>

        <div className={styles.skillCardWrapper}>
          {tech_stack_content.map((item, index) => (
            <SkillCard key={index} title={item.title} image={item.image} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechStackBoard;
