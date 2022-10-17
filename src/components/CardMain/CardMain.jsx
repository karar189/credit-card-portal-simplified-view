import React, { useState } from "react";
import "./style.css";
import left from "../../images/bg-main-desktop.png";
import mobileleft from "../../images/bg-main-mobile.png";

import { Container, Box, Grid } from "@mui/material";

import CardContents from "./CardContents/CardContents";
import Front from "../cardImg/Front";
import Back from "../cardImg/Back";
import ThanksPage from "./ThanksPage/ThanksPage";

const CardMain = () => {
  const [page, setPage] = useState(0);
  const pageDisplay = () => {
    switch (page) {
      case 0:
        return <CardContents setPage={setPage} />;
      case 1:
        return <ThanksPage setPage={setPage} />;
      default:
        return <CardContents setPage={setPage} />;
    }
  };

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
          {pageDisplay()}
          {/* <CardContents setPage={setPage} /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default CardMain;
