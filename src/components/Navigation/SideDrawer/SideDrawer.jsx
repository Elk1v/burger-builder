import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Drawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 23px 16px;
  box-sizing: border-box; 
  z-index: 200;
  
  transition: transform 0.3s ease-out;
  background-color: white;
  
      @media (min-width: 500px) {
        display: none;
    }
    
    &.open {
      transform: translateX(0);
    }
    
    &.close {
      transform: translateX(-100%);
      }
`;

const SideDrawer = ({ closed, showed }) => (
  <Aux>
    <Backdrop showed={showed} closed={closed} />
    <Drawer className={showed ? 'open' : 'close'}>
      <Logo
        logoHeight="11%"
        marginBottom="32px"
      />
      <nav>
        <NavigationItems />
      </nav>
    </Drawer>
  </Aux>
);

SideDrawer.propTypes = {
  closed: PT.func.isRequired,
  showed: PT.bool.isRequired,
};

export default SideDrawer;
