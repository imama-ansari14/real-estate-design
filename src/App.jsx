import { useState } from "react";
import heroImg from "./assets/hero.png";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SectionLuxury from "./components/SectionLuxury";
import ServicesShowcase from "./components/ServicesShowcase";
import StatsShowcasePro from "./components/StatsShowcasePro";
import HowWeWork from "./components/HowWeWork";
import ProjectsSection from "./components/ProjectsSection";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
       <ProjectsSection/>
        <StatsShowcasePro />
      <Services />
      <SectionLuxury />
       <HowWeWork/>
      <ServicesShowcase />
     <Footer/>
     
     
    </>
  );
}

export default App;
