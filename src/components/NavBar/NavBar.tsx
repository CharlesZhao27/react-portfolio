import React from "react";
import styles from "./NavBar.module.css";
import NavItem from "./NavItem/NavItem";
import content from "../../assets/content.json";

interface Props {}

const navigation = content["navigation"];

const NavBar: React.FC<Props> = () => {
  return (
    <div className={styles.outerContainer}>
      <ul className="flex items-center justify-evenly">
        {navigation.map((navItem, index) => (
          <NavItem href={navItem.href} key={index}>
            {navItem.name}
          </NavItem>
        ))}
      </ul>

      
    </div>
  );
};

export default NavBar;
