import React from "react";
import image from "../assets/CompStaff.png"
import '../App.css';

function InternInternalSubcons() {
  return (
    <>
    <div className="App">
    <div className="teamItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> Intern </h1>
    </div>
    <div className="teamItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> Internal </h1>
    </div>
    <div className="teamItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> SubCons </h1>
    </div>
    </div>
    </>
  );
}

export default InternInternalSubcons;