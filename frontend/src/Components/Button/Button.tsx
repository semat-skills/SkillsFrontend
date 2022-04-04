import React from "react";
import { ButtonDiv } from "./Button.style";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  disabled?: boolean & (boolean | (() => void));
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type,
  disabled,
  onClick,
}) => {
  return (
    <ButtonDiv type={type} disabled={disabled} onClick={onClick}>
      {text}
    </ButtonDiv>
  );
};
