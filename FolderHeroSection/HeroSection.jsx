import React from "react";
import HeroCover from "../img/bootTaup.jpg";
import "./HeroSection.css";
import Tattoo from "../tattoo/Tattoo";

const HeroSection = () => {
  return (
    <section className="heroCoverContainer">
      <img src={HeroCover} className="HeroCover" alt="HeroSection" />
      <section id="introductionHero">
        <h3>My name is Tony,</h3>
        <h1>I'm a developer</h1>
      <Tattoo tattooColor="white" className="mobileOnly" />
      </section>
    </section>
  );
};

export default HeroSection;
