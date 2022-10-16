import React from "react";
import "./style.css";

import front from "../../images/bg-card-front.png";

const Front = () => {
  return (
    <div className="front-img">
      <img src={front} alt="front" />
    </div>
  );
};

export default Front;
