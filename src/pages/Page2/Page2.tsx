import Card from "./Card";
import foodData from "./food.json";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Grid,
  Button,
} from "@mui/material";
import React from "react";

// interface Page2Props {
//   navigation: {
//     navigate: (screen: string) => void;
//   };
// }

const Page2 = () => {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Page 2</Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        {foodData.map((item, index) => (
          <Card
            key={index}
            food={item.food.toUpperCase()}
            rate={item.rate}
            image={item.image}
            description={item.description}
          />
        ))}
      </Paper>
    </Container>
  );
};

export default Page2;
