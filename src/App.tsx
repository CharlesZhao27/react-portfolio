import "./App.css";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Layout from "./components/Layout/Layout";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import TechStackBoard from "./components/TechStackBoard/TechStackBoard";

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <TechStackBoard />
        <ExperienceSection />
        <ProjectSection />
      </Layout>
    </>
  );
}

export default App;
