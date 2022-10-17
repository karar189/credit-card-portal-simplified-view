import React from "react";
import Tilt from "react-tilt";
import back from "../../images/bg-card-back.png";

const Back = () => {
  return (
    <Tilt
      className="Tilt"
      options={{ max: 15, easing: "cubic-bezier(.03,.98,.52,.99)", scale: 1 }}
    >
      <div className="back-img">
        <img src={back} alt="back" />
        <div className="cvv">
          <p>000</p>
        </div>
      </div>
    </Tilt>
  );
};

export default Back;
