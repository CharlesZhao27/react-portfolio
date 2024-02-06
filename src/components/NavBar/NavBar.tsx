import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.outerContainer}>
      <ul className={styles.innerContainer}>
        <li>
          <a href="#hero_section" className={styles.link}>
            ABOUT ME
          </a>
        </li>
        <li>
          <a href="#tech_stack_section" className={styles.link}>
            TECH STACK
          </a>
        </li>

        <li>
          <a href="#road_map_section" className={styles.link}>
            ROADMAP
          </a>
        </li>
        <li>
          <a href="#project-showroom_section" className={styles.link}>
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#learning_project" className={styles.link}>
            CONTINUOUS LEARNING
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
