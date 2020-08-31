import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

const Label = styled.div`
    padding: 10px;
    font-weight: bold;
    width: 80px;
`;

const Button = styled.button`
  display: block;
  width: 80px;
  margin: 0 5px;
  padding: 5px;
  
  color: white;
  font: inherit;
  cursor: pointer;
  outline: none;
  
  border: 1px solid #aa6817;
  
  &:disabled {    
    background-color: #AC9980;
    border: 1px solid #7E7365;
    color: #ccc;
    cursor: default;}
  
  &:hover:disabled {
    background-color: #AC9980;
    color: #ccc;
    cursor: not-allowed;
  }
`;

const LessButton = styled(Button)`
  color: white;
  background-color: #D39952;
  
  &:hover {
    background-color: #DAA972;
    color: white;
  }
  
  &:active {    
    background-color: #DAA972;
    color: white;
  }
`;

const MoreButton = styled(Button)`
  color: white;
  background-color: #8F5E1E;
  
  &:hover{    
    background-color: #99703F;
    color: white;
   }
    
  &:active{    
    background-color: #99703F;
    color: white;
   }
`;

const BuildCtrl = (props) => {
  const {
    ingLabel, addIngredient, removeIngredient, disabled,
  } = props;

  return (
    <Wrapper>
      <Label>{ingLabel}</Label>
      <LessButton onClick={removeIngredient} disabled={disabled}>Less</LessButton>
      <MoreButton onClick={addIngredient}>More</MoreButton>
    </Wrapper>
  );
};

BuildCtrl.propTypes = {
  ingLabel: PT.string.isRequired,
  addIngredient: PT.func.isRequired,
  removeIngredient: PT.func.isRequired,
  disabled: PT.bool.isRequired,
};

export default BuildCtrl;
