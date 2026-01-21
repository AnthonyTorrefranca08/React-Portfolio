import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SGLogo from "../img/SG.png";
import "./Navbar.css";
import BurgerIcon from "../FolderBurgerIcon/BurgerIcon.jsx";
import NavMenuList from "../FolderNavMenuList/NavMenuList.jsx";
import NavContact from "../FolderNavContact/NavContact.jsx";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const contactClicked = (e) => {
    e.preventDefault(); //
    setIsClicked(!isClicked);
    setIsToggle(false);
    console.log(isClicked);
    document.body.style.overflow = "hidden";
  };
  useEffect(() => {
    if (isClicked) {
      document.body.style.overflow = "hidden";
      document.body.style.color = "black";
      document.body.style.zIndex = "999";
    } else {
      document.body.style.overflow = "auto";
    }
  },[isClicked]);

  return (
    <>
      <nav>
        <a href="https://www.facebook.com/sugbusportsmasters" target="_blank">
          <img src={SGLogo} id="SGLogo" alt="Stark Graphics Logo" />
        </a>
        <BurgerIcon
          onClick={() => setIsToggle(!isToggle)}
          className={isToggle ? "active" : ""}
        />
        <NavMenuList
          toggleContact={contactClicked}
          className={isToggle ? "active" : ""}
        />
        <NavContact
          toggleContact={contactClicked}
          className={isClicked ? "active" : ""}
        />
      </nav>
    </>
  );
};

export default Navbar;