import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

const NavItem = styled.li`
    display: block;
    align-items: center; 
    width: 100%;
    margin: 10px 0;
    box-sizing: border-box;
  

  @media (min-width: 500px) {
    display: flex;
    align-items: center; 
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    }
`;

const NavLink = styled.a`
    display: block;
    width: 100%;
    color: #8F5C2C;
    text-decoration: none;
    box-sizing: border-box;
    
      &:hover, &:active, &.active{
      color: #40A4C8;
    }

  @media (min-width: 500px) {
    height: 100%;
    padding: 16px 10px;
    color: white;
    border-bottom: 4px solid transparent;
  
  &:hover, &:active, &.active{
      color: white;
      background-color: #8F5C2C;
      border-bottom: 4px solid #40A4C8;
    }
 }
`;

const NavigationItem = ({ children, link, active }) => (
  <NavItem>
    <NavLink
      href={link}
      className={active ? 'active' : null}
    >
      {children}
    </NavLink>
  </NavItem>
);

NavigationItem.defaultProps = {
  active: false,
};

NavigationItem.propTypes = {
  children: PT.string.isRequired,
  link: PT.string.isRequired,
  active: PT.bool,
};

export default React.memo(NavigationItem);
