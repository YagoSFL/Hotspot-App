import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Navbar from './Navbar';
import Logo from './Logo';
import Divider from './Divider';
import Content from './Content';
import HotspotList from '../hotspot-list';
import NewHotspotButton from '../elements/NewHotspotButton';
import Capture from '../capture';

import LOGO from '../../assets/LOGO.png';

const StyledContainer = styled.div`
  font-family: Helvetica;
`;

const Page = ({ navLinks, hotspotList }) => {
  const [isCapturing, setCapturing] = useState(false);

  return (
    <StyledContainer>
        <Capture
          show={isCapturing} 
          onCapture={() => setCapturing(!isCapturing)}
          hotspotList={hotspotList}
        >
          <Header>
            <Logo src={LOGO} />
            <Navbar links={navLinks} />
          </Header>
          <Divider />
          <Content>
            <NewHotspotButton onClick={() => setCapturing(!isCapturing)} />
            {hotspotList.length > 0 && <HotspotList list={hotspotList} />}
          </Content>
        </Capture>
      </StyledContainer>
  );
}

export default Page;
