import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 24px
  background-color: #12c1c7;
  color: #fff;
  border-radius: 50px;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const NewHotspotButton = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    Create Hotspot
  </StyledButton>
);

export default NewHotspotButton;