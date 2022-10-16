import "./App.css";
import CardMain from "./components/CardMain/CardMain";
import { Container, Box, Grid } from "@mui/material";

function App() {
  return (
    <>
      <Container>
        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <CardMain />
        </Grid>
      </Container>
    </>
  );
}

export default App;
