import React from "react";
import Tilt from "react-tilt";
import "./style.css";
import logo from "../../images/card-logo.svg";

import front from "../../images/bg-card-front.png";

const Front = () => {
  return (
    <>
      <Tilt
        className="Tilt"
        options={{ max: 15, easing: "cubic-bezier(.03,.98,.52,.99)", scale: 1 }}
      >
        <div className="Tilt-inner">
          {" "}
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
        </div>
      </Tilt>
    </>
  );
};

export default Front;
