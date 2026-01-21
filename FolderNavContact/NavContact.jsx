import React from "react";
import StandingModel from "../img/professionally standing.png";
import "./NavContact.css";
import closeBtn from "../img/closeBtn.png";
import socGit from  '../img/socGit.svg'
import socLin from '../img/socLin.png'
import socThr from '../img/socTh.png'

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
      <section id="modalContent">
          <section id="introductionNavContact">
            <h3>Hi, I am</h3>
            <h1>Anthony </h1>
            <p>Front-end Developer / UI Designer</p>
          </section>

          <section id="socials">
              <img src={socGit} alt="GitHub Logo" />
              <img src={socThr} alt="Threads" />
              <img src={socLin} alt="LinkedIn" />
          </section>         
      </section>
      <section id="modalCover"></section>
    </section>
  );
};

export default NavContact;
