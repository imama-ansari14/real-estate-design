import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

import "./App.css";
import SectionLuxury from "./components/SectionLuxury";
import ServicesShowcase from "./components/ServicesShowcase";
import StatsShowcasePro from "./components/StatsShowcasePro";

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
    </>
  );
}

export default App;
