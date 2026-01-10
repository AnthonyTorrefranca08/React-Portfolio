import React from "react";
import "./BurgerIcon.css";

const BurgerIcon = ({ className, onClick }) => {
  return (
    <>
      <button id="hamburgerBtn" className={className} onClick={onClick}>
        <span className="hamLine"></span>
        <span className="hamLine"></span>
        <span className="hamLine"></span>
      </button>
    </>
  );
};

export default BurgerIcon;
