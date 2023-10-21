import React from "react";
import { Grid, InputBase, Typography } from "@mui/material";
import salad from "../../assets/salad.jpeg"; // Replace with your actual image paths
import { Container } from "@mui/system";
import FloatingNavBar from "../../components/FloatingNavbar";

const categoryContainerStyle: React.CSSProperties = {
  // overflowY: "hidden",
  maxHeight: "calc(100vh - 56px)",
};

const searchBarStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",
  backgroundColor: "#f2f2f2",
  padding: "8px",
  marginBottom: "8px",
  zIndex: 1,
};

const inputStyle: React.CSSProperties = {
  flex: 1,
  marginLeft: "8px",
};

const imageContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  overflowX: "auto",
  padding: "14px",
  width: "100%", // Make the container 100% wide
  justifyContent: "flex-start", // Align images to the start
  flexWrap: "nowrap", // Prevent images from wrapping to the next line
  alignItems: "flex-start", // Align items to the start
};

const imageStyle: React.CSSProperties = {
  marginRight: "8px",
  height: "210px",
  width: "300px",
};
//7/10 21/30
const labelStyle: React.CSSProperties = {
  textAlign: "center",
  marginTop: "8px",
  height: "40px", // Set a fixed height
  overflow: "auto", // Enable text overflow
};

const headingStyle: React.CSSProperties = {
  fontSize: "24px", // Adjust the font size as needed
  textAlign: "center",
  marginBottom: "16px", // Add some spacing below the heading
};

const Category: React.FC = () => {
  return (
    <Container>
      <div style={categoryContainerStyle}>
        <div style={searchBarStyle}>
          <InputBase
            style={inputStyle}
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" style={headingStyle}>
              What's on your mind?
            </Typography>
          </Grid>
          <div style={imageContainerStyle}>
            <div>
              <img src={salad} alt="Breakfast" style={imageStyle} />
              <Typography variant="h6" style={labelStyle}>
                Breakfast
              </Typography>
            </div>
            <div>
              <img src={salad} alt="Lunch" style={imageStyle} />
              <Typography variant="h6" style={labelStyle}>
                Lunch
              </Typography>
            </div>
            <div>
              <img src={salad} alt="Snacks" style={imageStyle} />
              <Typography variant="h6" style={labelStyle}>
                Snacks
              </Typography>
            </div>
            <div>
              <img src={salad} alt="Dinner" style={imageStyle} />
              <Typography variant="h6" style={labelStyle}>
                Dinner
              </Typography>
            </div>
            {/* Add more images and labels as needed */}
          </div>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" style={headingStyle}>
              What do you want, snacks or special?
            </Typography>
          </Grid>
          <div style={imageContainerStyle}>
            <div>
              <img src={salad} alt="Special 1" style={imageStyle} />
              <Typography variant="h6" style={labelStyle}>
                Special 1
              </Typography>
            </div>
            <div>
              <img src={salad} alt="Special 2" style={imageStyle} />
              <Typography variant="h6" style={labelStyle}>
                Special 2
              </Typography>
            </div>
            <div>
              <img src={salad} alt="Snacks" style={imageStyle} />
              <Typography variant="h6" style={labelStyle}>
                Snacks
              </Typography>
            </div>
            <div>
              <img src={salad} alt="Thali" style={imageStyle} />
              <Typography variant="h6" style={labelStyle}>
                Thali
              </Typography>
            </div>
            {/* Add more images and labels as needed */}
          </div>
        </Grid>
      </div>
      <FloatingNavBar />
    </Container>
  );
};

export default Category;
