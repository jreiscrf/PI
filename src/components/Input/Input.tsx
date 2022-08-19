import React from "react";
import { InputWrapper, Label } from "./styles";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  label,
}: InputProps) => {
  return (
    <Label>
      {label}
      <InputWrapper
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Label>
  );
};

export default Input;
