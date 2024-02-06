import "./App.css";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Layout from "./components/Layout/Layout";
import TechStackBoard from "./components/TechStackBoard/TechStackBoard";

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <TechStackBoard />
        <ExperienceSection />
      </Layout>
    </>
  );
}

export default App;
