import React from "react";
import back from "../../images/bg-card-back.png";

const Back = () => {
  return (
    <div className="back-img">
      <img src={back} alt="back" />
      <div className="cvv">
        <p>000</p>
      </div>
    </div>
  );
};

export default Back;
