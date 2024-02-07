import React, { ReactNode } from "react";
import styles from "../NavBar.module.css";
import cx from "classnames";

interface Props {
  children: ReactNode;
  href: string;
}

const NavItem: React.FC<Props> = ({ children, href }) => {
  return (
    <li className="">
      <a href={href} className={cx(styles.link, ["capitalize"])}>
        {children}
      </a>
    </li>
  );
};

export default NavItem;
