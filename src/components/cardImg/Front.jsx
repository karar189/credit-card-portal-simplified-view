import React from "react";
import "./style.css";
import logo from "../../images/card-logo.svg";

import front from "../../images/bg-card-front.png";

const Front = () => {
  return (
    <>
      <div className="front-img">
        <img src={front} alt="front" />
        <div className="card-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="card-number">
          <p>0000 0000 0000 0000 </p>
        </div>
        <div className="card-holder">
          <p>Card Holder</p>
          <p>00/00</p>
        </div>
      </div>
    </>
  );
};

export default Front;
