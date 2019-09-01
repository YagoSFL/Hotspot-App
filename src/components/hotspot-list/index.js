import React from 'react';
import styled from 'styled-components';
import uuidv4 from 'uuidv4';

import HeaderList from './HeaderList';
import ListItem from './ListItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 10px;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column
  justify-content: flex-start;
  margin: 0;
  padding: 0;
`;

const List = ({ hotspots }) => (
  <Container>
    <HeaderList />
    <StyledList>
      {hotspots.map((hotspot, index) => {
        const itemNum = index + 1;
        
        return (
          <ListItem key={uuidv4()}>
            {`${hotspot} #${itemNum}`}
          </ListItem>
        );
      })}
    </StyledList>
  </Container>
);

export default List;