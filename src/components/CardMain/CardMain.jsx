import React from "react";
import "./style.css";
import left from "../../images/bg-main-desktop.png";

import { Container, Box, Grid } from "@mui/material";

const CardMain = () => {
  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1 }} className="card">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img src={left} alt="" />
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default CardMain;
