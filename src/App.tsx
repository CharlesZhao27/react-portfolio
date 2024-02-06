import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Layout from "./components/Layout/Layout";
import TechStackBoard from "./components/TechStackBoard/TechStackBoard";

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <TechStackBoard />
      </Layout>
    </>
  );
}

export default App;
