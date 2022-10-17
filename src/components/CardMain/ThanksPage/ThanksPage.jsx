import React from "react";
import "../ThanksPage/style.css";
import tick from "../../../images/icon-complete.svg";
import { Container, Box, Grid } from "@mui/material";

const ThanksPage = () => {
  return (
    <>
      <div className="thanks-box">
        <img src={tick} alt="" />
        <h1>THANK YOU!</h1>
        <p>We've added your card details.</p>
        <br />
        <div className="form-button ">
          <button
            id="thanks-button"
            style={{ border: "none", margin: "0" }}
            onClick={() => {
              window.location.reload();
            }}
          >
            {/* <ColorButton variant="contained">SUBMIT</ColorButton> */}
            <p>Continue</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default ThanksPage;
