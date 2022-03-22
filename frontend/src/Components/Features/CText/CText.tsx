import React from "react";
import { TextDiv } from "./CTextStyle";
interface CTextProps {
  text: string;
}

export const CText: React.FC<CTextProps> = ({ text }) => {
  return <TextDiv>{text}</TextDiv>;
};
