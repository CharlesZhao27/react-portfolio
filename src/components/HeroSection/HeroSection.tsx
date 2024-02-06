import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section id="hero_section" className={styles.container}>
      <div className={styles.innerLayout}>
        <div className={styles.textSection}>
          <span className={styles.highlightedText}>Software Developer</span>
          <br />
          <span className={styles.title}>Creative Designer</span>
          <br />
          <span className={styles.highlightedText}> Agile Learner</span>
          <br />
          <span className=" font-sans font-white ">
            Bring Concept into Reality
          </span>
          <br />
          <br />
          <span style={{ color: "grey" }}>
            Having recently graduated from university, I am on a mission to
            craft innovative solutions at the intersection of technology and
            design. With a keen eye for detail and a relentless pursuit of
            excellence, I am passionate about pushing boundaries and
            continuously learning to shape the future of the digital landscape.
            Together, let's innovate and create something truly remarkable.
          </span>
        </div>

        <div>
          <img
            src="src/assets/hero-image.png"
            alt="hero-img"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
