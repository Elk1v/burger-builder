import React from 'react';
import PT from 'prop-types';
import shortid from 'shortid';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = ({
  ingredients,
  purchaseCancelled,
  purchaseContinued,
  total,
}) => {
  const ingredientSummary = Object.keys(ingredients).map((ingKey) => (
    <li key={shortid()}>
      <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>
      :
      {` ${ingredients[ingKey]}`}
    </li>
  ));

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>
        <strong>{`Total: ${total.toFixed(2)}`}</strong>
      </p>
      <p>Continue to checkout ?</p>
      <Button clicked={purchaseCancelled} type="Danger">CANCEL</Button>
      <Button clicked={purchaseContinued} type="Success">CONTINUE</Button>
    </Aux>
  );
};

OrderSummary.propTypes = {
  ingredients: PT.objectOf(PT.number).isRequired,
  purchaseCancelled: PT.func.isRequired,
  purchaseContinued: PT.func.isRequired,
  total: PT.number.isRequired,
};

export default OrderSummary;
