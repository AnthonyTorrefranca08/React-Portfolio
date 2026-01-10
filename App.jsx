import React from "react";
import "./App.css";
import Navbar from "./components/FolderNavbar/Navbar.jsx";
import HeroSection from "/src/components/FolderHeroSection/HeroSection.jsx";
import ItBerries from "./components/FolderItBerries/ItBerries.jsx";
import AboutMe from "./components/FolderAboutMe/AboutMe.jsx";

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
      </section>
    </main>
  );
}

export default App;
