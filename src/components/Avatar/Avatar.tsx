import React from "react";
import cx from "classnames";

interface Props {
  classname?: string;
}

const Avatar: React.FC<Props> = ({ classname }) => {
  return (
    <div className={cx({ [""]: true }, classname)}>
      <div className="rounded-full shadow-sm bg-opacity-80 relative">
        <img
          src="src/assets/icons/avatar.svg"
          alt="avatar"
          className="w-[100px] h-[100px] relative"
        />
      </div>
    </div>
  );
};

export default Avatar;
