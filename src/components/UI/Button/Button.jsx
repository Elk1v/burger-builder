import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    
    &:first-of-type {
      margin-left: 0;
      padding-left: 0;
    }
    
    &.Success {
      color: #5C9210;
    }

    &.Danger {
      color: #944317;
    }
`;

const Button = ({ children, clicked, type }) => (
  <Btn
    onClick={clicked}
    className={type}
  >
    {children}
  </Btn>
);

Button.propTypes = {
  type: PT.string.isRequired,
  children: PT.node.isRequired,
  clicked: PT.func.isRequired,
};

export default Button;
