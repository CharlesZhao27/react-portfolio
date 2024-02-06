import React, { ReactNode } from "react";
import styles from "../NavBar.module.css";

interface Props {
  children: ReactNode;
  href: string;
}

const NavItem: React.FC<Props> = ({ children, href }) => {
  return (
    <li>
      <a href={href} className={styles.link}>
        {children}
      </a>
    </li>
  );
};

export default NavItem;
