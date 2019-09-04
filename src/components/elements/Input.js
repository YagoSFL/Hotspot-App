import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  font-family: Helvetica;
  padding: 10px;
  margin-bottom: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const StyledLabel = styled.label`
  font-family: Helvetica;
  font-size: 14px;
  color: #a8aaad;
`;

const Input = ({ label, ...inputProps }) => (
  <>
    <StyledLabel>{label}</StyledLabel>
    <StyledInput {...inputProps} />
  </>
);

export default Input;
