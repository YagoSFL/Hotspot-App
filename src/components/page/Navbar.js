import React from 'react';
import styled from 'styled-components';

import Link from '../elements/Link';

const StyledNavbar = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
`;

const NavItem = styled.li`
  font-size: 2rem;
  margin: 0 20px;
`;

const Navbar = ({ links }) => (
  <StyledNavbar>
    {links.map(item => (
      <NavItem key={item}>
        <Link>{item}</Link>
      </NavItem>
    ))}
  </StyledNavbar>
);

export default Navbar;