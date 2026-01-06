import React from "react";
import StandingModel from "./img/professionally standing.png";
import "./NavContact.css";

const NavContact = ({ className }) => {
  return (
    <section id="contactModal" className={`contactModal ${className}`}>
      <img src={StandingModel} id="modelStanding" alt="Model" />
      <section id="introduction">
        <h3>Hi, I am</h3>
        <h1>Anthony Torrefranca</h1>
        <p>Front-end Developer / UI Designer</p>
      </section>
    </section>
  );
};

export default NavContact;
