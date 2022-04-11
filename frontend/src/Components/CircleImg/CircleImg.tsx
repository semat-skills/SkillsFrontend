import React from "react";
import { Circle } from "./CircleImg.style";

interface CircleProps {
  imgUrl: string;
}

export const CircleImg: React.FC<CircleProps> = ({ imgUrl }) => {
  return <Circle />;
};
