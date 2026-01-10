import React from "react";
import StandingModel from "../img/professionally standing.png";
import "./NavContact.css";
import closeBtn from "../img/closeBtn.png";

const NavContact = ({ className, toggleContact }) => {
  return (
    <section id="contactModal" className={`contactModal ${className}`}>
      <section id="closeBtn">
        <img
          src={closeBtn}
          onClick={toggleContact}
          className="closeBtn"
          alt="Close Button"
        />
      </section>
      <img src={StandingModel} id="modelStanding" alt="Model" />
      <section id="introduction">
        <h3>Hi, I am</h3>
        <h1>Anthony Torrefranca</h1>
        <p>Front-end Developer / UI Designer</p>
      </section>
      <section id="modalCover"></section>
    </section>
  );
};

export default NavContact;
