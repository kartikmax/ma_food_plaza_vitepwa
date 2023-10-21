import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

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
    <MuiCard
      sx={{ borderRadius: 7, margin: ".625rem", width: "90%", padding: "1.25" }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={food}
        sx={{ borderRadius: 10 }}
      />
      <CardContent sx={{ paddingTop: ".625rem" }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: "bold", marginBottom: ".3125rem" }}
        >
          {food}
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: ".3125rem" }}>
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
