import React from "react";

interface SkillCardProps {
  title: string;
  image: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, image }) => {
  return (
    <div className="flex flex-col items-center gap-[10px] max-w-[250px] w-1/2 px-4 py-4 border-solid border-transparent shadow-xl rounded-lg">
      <img src={image} className="w-[250px] h-[250px]" />
      <div className="font-default text-[2xl] font-bold">{title}</div>
    </div>
  );
};

export default SkillCard;
