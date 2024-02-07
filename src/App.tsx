import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Layout from "./components/Layout/Layout";
import LearningSection from "./components/LearningSection/LearningSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import TechStackBoard from "./components/TechStackBoard/TechStackBoard";

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <TechStackBoard />
        <ProjectSection />
        <LearningSection />
      </Layout>
    </>
  );
}

export default App;
