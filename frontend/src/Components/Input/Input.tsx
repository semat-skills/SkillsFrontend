import React from "react";
import { Container } from "./Input.style";

interface InputProps {
  label?: string;
  inputId: string;
  inputName: string;
  inputType: string;
  placeholder?: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className: string;
  inputErrors?: string | undefined;
  touched?: boolean | undefined;
}

export const Input: React.FC<InputProps> = ({
  label,
  inputId,
  inputName,
  inputType,
  placeholder,
  value,
  onChange,
  className,
  inputErrors,
  touched,
}) => {
  return (
    <Container>
      {label && <label>{label}</label>}
      <input
        id={inputId}
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
      {inputErrors && touched && (
        <div className="text-danger">{inputErrors}</div>
      )}
    </Container>
  );
};
