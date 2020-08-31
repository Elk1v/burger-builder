import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const Hamburger = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;
    
    @media (min-width: 500px) {
      display: none;
    }
`;

const Peace = styled.div`
    width: 90%;
    height: 3px;
    background-color: white;
`;

const DrawerToggle = ({ clicked }) => (
  <Hamburger onClick={clicked}>
    <Peace />
    <Peace />
    <Peace />
  </Hamburger>
);

DrawerToggle.propTypes = {
  clicked: PT.func.isRequired,
};

export default DrawerToggle;
