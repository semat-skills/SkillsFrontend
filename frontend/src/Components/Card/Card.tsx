import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Container } from "./CardStyle";


export const CardComp: React.FC<CardProps> = ({ img, title, text }) => {
  return (
    <Container>
      <Card sx={{ maxWidth: 345, minWidth: 200 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="170"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {title}
            </Typography>
            <Typography variant="body1">{text}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};
