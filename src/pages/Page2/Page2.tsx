import Card from "./Card";
import foodData from "./food.json";
import { Container, Paper } from "@mui/material";
import FloatingNavBar from "../../components/FloatingNavbar";
import AppHeader from "../../components/AppHeader";

const Page2 = () => (
  <Container>
    <AppHeader/>
    <Paper
      elevation={3}
      style={{
        padding: "1.25rem",
        marginTop: "1.25rem",
        background: "inherit",
      }}
    >
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
    <FloatingNavBar/>
  </Container>
);

export default Page2;
