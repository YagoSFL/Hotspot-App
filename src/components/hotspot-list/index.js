import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'

import HeaderList from './HeaderList';
import ListItem from './ListItem';
import Link from '../elements/Link';
import { getHotspotList } from '../../actions/hotspotActions';

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

const removeSpot = (
  key,
  dispatch,
  hotspotList,
) => {
  hotspotList.splice(key, 1);
  window.localStorage.setItem('hotspots', JSON.stringify(hotspotList));  
  dispatch(getHotspotList());
};

const List = ({ list }) => {
  const disptach = useDispatch();
  return (
    <Container>
      <HeaderList />
      <StyledList>
        {list.map((hotspot, index) => (
            <ListItem key={hotspot.name}>
              {hotspot.name}
              <Link onClick={() => removeSpot(index, disptach, list)}>Delete</Link>
            </ListItem>
          ))}
      </StyledList>
    </Container>
  );
};

export default List;