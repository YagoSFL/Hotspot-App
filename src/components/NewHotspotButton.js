import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #19f7ff;
  color: #fff;
  border-radius: 50px;
`;

const NewHotspotButton = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    CREATE HOTSPOT
  </StyledButton>
);

export default NewHotspotButton;