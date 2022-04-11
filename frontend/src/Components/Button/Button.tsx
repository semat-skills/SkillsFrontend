import React from "react";
import { StyledButton } from "./Button.style";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type,
  disabled,
  onClick,
}) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {text}
    </StyledButton>
  );
};
