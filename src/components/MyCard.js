import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MyCard = ({ image, title, text }) => {
  return (
    <Card sx={{ maxWidth: "50%" }}>
      <CardMedia sx={{ height: 140, width: 200 }} image={image} title={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyCard;
