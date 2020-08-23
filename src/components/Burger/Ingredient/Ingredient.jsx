import React from 'react';
import PT from 'prop-types';

import {
  Bacon,
  BreadBottom,
  BreadTop,
  Cheese,
  Meat, Salad,
  SeadsOne,
  SeadsTwo,
} from '../../../ingredients';

const Ingredient = (props) => {
  const { type } = props;
  let ingredient = null;

  switch (type) {
    case ('bacon'):
      ingredient = <Bacon />;
      break;
    case ('bread-bottom'):
      ingredient = <BreadBottom />;
      break;
    case ('bread-top'):
      ingredient = (
        <BreadTop>
          <SeadsOne />
          <SeadsTwo />
        </BreadTop>
      );
      break;
    case ('cheese'):
      ingredient = <Cheese />;
      break;
    case ('meat'):
      ingredient = <Meat />;
      break;
    case ('salad'):
      ingredient = <Salad />;
      break;

    default: ingredient = null;
  }

  return ingredient;
};

export default Ingredient;
