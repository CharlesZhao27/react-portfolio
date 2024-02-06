import React from "react";

interface SocialLinkProps {
  classname?: string;
  href?: string;
}

export const GithubIcon: React.FC<SocialLinkProps> = ({ href }) => {
  return (
    <a
      href={href}
      className="p-2 rounded-full flex items-center justify-center hover:scale-105 hover:transition-transform hover:duration-[0.3s] hover:shadow-xl"
    >
      <img
        src="src/assets/icons/github.svg"
        alt="github-link"
        className="w-[50px] h-[50px]"
      />
    </a>
  );
};
