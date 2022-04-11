import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Container } from "./CardStyle";

interface CardProps {
  img: string;
  title: string;
  text: string;
}

export const CardComp: React.FC<CardProps> = ({ img, title, text }) => {
  return (
    <Container>
      <Card sx={{ maxWidth: 230, minWidth: 200 }}>
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
            <Typography className="typography">{text}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};
