import styled from "styled-components";

export const InputWrapper = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  color: #333;
  outline: none;
  &:focus {
    border: 1px solid #000;
  }
`;
