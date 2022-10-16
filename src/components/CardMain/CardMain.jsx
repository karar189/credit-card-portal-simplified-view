import React from "react";
import "./style.css";
import left from "../../images/bg-main-desktop.png";
import mobileleft from "../../images/bg-main-mobile.png";

import { Container, Box, Grid } from "@mui/material";

import CardContents from "./CardContents/CardContents";
import Front from "../cardImg/Front";
import Back from "../cardImg/Back";

const CardMain = () => {
  return (
    <>
      <Grid container className="card">
        <Grid item xs={12} md={4}>
          <img src={left} id="desktopViewImg" />
          <img src={mobileleft} id="mobileViewImg" />
        </Grid>
        <div className="card-section">
          <div className="frontCard">
            {" "}
            <Front />
          </div>
          <div className="backCard">
            <Back />
          </div>
        </div>
        <Grid item xs={12} md={8}>
          <CardContents />
          {/* <Test /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default CardMain;
