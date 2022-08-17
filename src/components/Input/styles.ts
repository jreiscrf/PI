import styled from "styled-components";

const InputWrapper = styled.input`
  width: 80%;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 1px;
  padding: 0 10px;
  margin: 8px 0;
  font-size: 16px;
  color: #333;
  outline: none;
  &:focus {
    border: 1px solid #000;
  }
`;

const Label = styled.label`
  font-size: 12px;
  color: #fff;
  margin-bottom: 2px;
`;

export { InputWrapper, Label };
