import React from 'react';
import styled from 'styled-components';

import NavigationItem from './NavigationItem/NavigationItem';

const NavItemslist = styled.ul`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  
    @media (min-width: 500px) {
      flex-flow: row;
    }
`;

const NavigationItems = () => (
  <NavItemslist>
    <NavigationItem active link="/">Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </NavItemslist>
);

export default React.memo(NavigationItems);
