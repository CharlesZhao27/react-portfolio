import React, { ReactNode } from "react";
import NavBar from "../NavBar/NavBar";
import Avatar from "../Avatar/Avatar";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
