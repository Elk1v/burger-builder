import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const ToolBarHeader = styled.header`
  width: 100%;
  height: 56px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
  
  background-color: #703B09;
`;

const Nav = styled.nav`
  height: 100%;
  
  @media (max-width: 499px) {
    display: none;
  }
`;

const Toolbar = ({ drawerToggleClicked }) => (
  <ToolBarHeader>
    <DrawerToggle clicked={drawerToggleClicked} />
    <Logo logoHeight="80%" />
    <Nav>
      <NavigationItems />
    </Nav>
  </ToolBarHeader>
);

Toolbar.propTypes = {
  drawerToggleClicked: PT.func.isRequired,
};

export default Toolbar;
