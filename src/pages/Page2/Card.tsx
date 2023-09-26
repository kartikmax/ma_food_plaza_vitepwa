import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

interface CardProps {
  food: string;
  rate: {
    half: number;
    full: number;
  };
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ food, rate, image, description }) => {
  return (
    <MuiCard sx={{ borderRadius: 7, margin: "10px", width: "90%" }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={food}
        sx={{ borderRadius: 10 }}
      />
      <CardContent sx={{ paddingTop: "10px" }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: "bold", marginBottom: "5px" }}
        >
          {food}
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: "5px" }}>
          {`Half: ${rate.half} | Full: ${rate.full}`}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
