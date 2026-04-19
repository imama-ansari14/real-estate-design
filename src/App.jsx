import { useState } from "react";
import heroImg from "./assets/hero.png";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SectionLuxury from "./components/SectionLuxury";
import ServicesShowcase from "./components/ServicesShowcase";
import StatsShowcasePro from "./components/StatsShowcasePro";
<<<<<<< HEAD
import HowWeWork from "./components/HowWeWork";
import ProjectsSection from "./components/ProjectsSection";
=======
import "./App.css";
>>>>>>> 7abbe0db553466eb114c18410ec902a6b4bbc85f

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <SectionLuxury />
      <ServicesShowcase />
      <StatsShowcasePro />
      <HowWeWork/>
      <ProjectsSection/>
    </>
  );
}

export default App;
