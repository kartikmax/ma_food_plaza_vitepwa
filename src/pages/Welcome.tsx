import { Container, Grid, Typography } from "@mui/material";
import "../index.css";
import maskGp1 from "../assets/mask-group7@2x.png";
import maskGp2 from "../assets/mask-group8@2x.png";
import manToy from "../assets/toyfaces-tansparent-bg-29@2x.png";
import womanToy from "../assets/toyfaces-tansparent-bg-49@2x.png";
import Login from "./Login";
import FloatingNavBar from "../components/FloatingNavbar";
// import Login from "@/components/Login";

function Welcome() {
  const width = "48%";
  const height = "48%";

  return (
    <>
      {/* <Meta title="Welcome" /> */}
      <Container maxWidth="md">
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "80vh" }}
          color="white"
        >
          <Grid item xs={12}>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              fontWeight="600"
            >
              MA Food Plaza
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Discover a world of delicious food at your fingertips.
            </Typography>
          </Grid>
          <Login />
          <Grid item xs={12}>
            <img alt="man-1" src={womanToy} width={width} height={height} />
            <img alt="woman" src={manToy} width={width} height={height} />
            <img alt="woman" src={maskGp1} width={width} height={height} />
            <img alt="woman" src={maskGp2} width={width} height={height} />
          </Grid>
        </Grid>
        <FloatingNavBar />
      </Container>
    </>
  );
}

export default Welcome;
