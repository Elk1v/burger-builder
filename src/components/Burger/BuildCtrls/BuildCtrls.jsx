import React from 'react';
import styled, { keyframes } from 'styled-components';
import shortid from 'shortid';
import PT, { bool } from 'prop-types';
import BuildCtrl from './BuildCtrl/BuildCtrl';

const Wrapper = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 10px 0;
  
  box-shadow: 0 2px 1px #ccc;
  background-color: #cf8f2e;
`;

const enableAnimation = keyframes`
      enable {
      0% {
          transform: scale(1);
      }
      60% {
          transform: scale(1.1);
      }
      100% {
          transform: scale(1);
      }
    }
`;

const OrderButton = styled.button`
    padding: 15px 30px;

    color: #966909;
    font-family: inherit;
    font-size: 1.2em;
    outline: none;
    cursor: pointer;
    
    background-color: #DAD735;
    box-shadow: 2px 2px 2px #966909;
    border: 1px solid #966909;
    animation-name: ${enableAnimation};
    
    &:hover, &:active {
      background-color: #A0DB41;
      border: 1px solid #966909;
      color: #966909;
    }
    
    &:disabled {
      color: #888888;
      cursor: not-allowed;
      background-color: #C7C6C6;
      border: 1px solid #ccc;
    }
    
    &:not(:disabled) {
    animation: enable 0.3s linear;
    }
    
`;

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' },
];

const BuildCtrls = ({
  disabled,
  onBtnAddIngredient,
  onBtnRemoveIngredient,
  price,
  purchasable,
  ordered,
}) => (
  <Wrapper>
    <p>
      Current price:
      <strong>{` ${price.toFixed(2)}`}</strong>
    </p>
    { controls.map((ctrl) => (
      <BuildCtrl
        key={shortid()}
        ingLabel={ctrl.label}
        type={ctrl.type}
        addIngredient={() => { onBtnAddIngredient(ctrl.type); }}
        removeIngredient={() => { onBtnRemoveIngredient(ctrl.type); }}
        disabled={disabled[ctrl.type]}
      />
    )) }
    <OrderButton
      disabled={!purchasable}
      onClick={ordered}
    >
      Order now
    </OrderButton>
  </Wrapper>
);

BuildCtrls.propTypes = {
  disabled: PT.objectOf(bool).isRequired,
  onBtnAddIngredient: PT.func.isRequired,
  onBtnRemoveIngredient: PT.func.isRequired,
  ordered: PT.func.isRequired,
  purchasable: PT.bool.isRequired,
  price: PT.number.isRequired,
};

export default BuildCtrls;
