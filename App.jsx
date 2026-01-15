import React from "react";
import "./App.css";
import Navbar from "./components/FolderNavbar/Navbar.jsx";
import HeroSection from "/src/components/FolderHeroSection/HeroSection.jsx";
import ItBerries from "./components/FolderItBerries/ItBerries.jsx";
import AboutMe from "./components/FolderAboutMe/AboutMe.jsx";
import Portfolio from "./components/FolderPortfolio/Portfolio.jsx";
import FolderContactSec from "./components/FolderContactSec/FolderContactSec.jsx";

function App() {
  return (
    <main>
      <section className="navBar">
        <Navbar />
      </section>
      <section className="mainEl">
        <HeroSection className='contentLayout' />
        <ItBerries />
        <AboutMe />
        <Portfolio />
        <FolderContactSec />
      </section>
    </main>
  );
}

export default App;
