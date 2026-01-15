import React from "react";
import "./Tattoo.css";

const Tattoo = ({dDisplay= "flex", tattooColor= "white", className }) => {
  return (
    <section id="tattoo" className={className} style={{"--d-display": dDisplay,"--t-color": tattooColor}}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </section>
  );
};


export default Tattoo;
