import "./App.css";
import CardMain from "./components/CardMain/CardMain";
import { Container, Box, Grid } from "@mui/material";

function App() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <CardMain />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
