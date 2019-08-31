import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Navbar from './Navbar';
import Logo from './Logo';
import Divider from './Divider';
import Content from './Content';
import List from '../list';

import LOGO from '../../assets/LOGO.png';

const StyledContainer = styled.div`
  font-family: Helvetica;
`;

const Page = ({ navLinks, hotspots }) => (
  <StyledContainer>
    <Header>
      <Logo src={LOGO} />
      <Navbar links={navLinks} />
    </Header>
    <Divider />
    <Content>
      <List hotspots={hotspots} />
    </Content>
  </StyledContainer>
);

export default Page;
