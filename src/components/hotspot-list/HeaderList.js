import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  padding: 5px;
  background-color: #e8eaed;
  color: #a8aaad;
  font-size: 24px;
`;

const HeaderList = () => (
  <StyledHeader>
    List of hotspots
  </StyledHeader>
);

export default HeaderList;
