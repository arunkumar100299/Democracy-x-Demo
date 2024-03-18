import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CardMUI({ path, title, content }) {
  return (
    <Card
      sx={{ maxWidth: 345, border: "5px solid #e1e3e1", borderRadius: "15px" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={path}
          alt="green iguana"
          sx={{ backgroundRepeat: "no-repeat" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
