import React from "react";
import "./style.css";
import left from "../../images/bg-main-desktop.png";
import mobileleft from "../../images/bg-main-mobile.png";

import { Container, Box, Grid } from "@mui/material";

import CardContents from "./CardContents/CardContents";

const CardMain = () => {
  return (
    <>
      <Grid container className="card">
        <Grid item xs={12} md={4}>
          <img src={left} id="desktopViewImg" />
          <img src={mobileleft} id="mobileViewImg" />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContents />
          {/* <Test /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default CardMain;
