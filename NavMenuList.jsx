import React from "react";
import "./NavMenuList.css";

const NavMenuList = ({ className, toggleContact }) => {
  return (
    <section id="navMenuList" className={className}>
      <ul id="navUl">
        <li>
          <a href="#aboutMe">About Me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contactMe" onClick={toggleContact}>
            CONTACT ME
          </a>
        </li>
      </ul>
    </section>
  );
};

export default NavMenuList;
