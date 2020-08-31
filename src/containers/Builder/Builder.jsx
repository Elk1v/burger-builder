import React, { useState, useEffect } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildCtrls from '../../components/Burger/BuildCtrls/BuildCtrls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  bacon: 1,
  cheese: 0.6,
  meat: 1.5,
  salad: 0.3,
};

const Builder = () => {
  const [ingredients, setIngredients] = useState(
    {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0,
    },
  );
  const [price, setPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  const updatePurchasableInfo = (ingredientsToCopy) => {
    const ingredientsCopy = {
      ...ingredientsToCopy,
    };

    const keysValueSum = Object.keys(ingredientsCopy)
      .map((ingKey) => (ingredientsCopy[ingKey]))
      .reduce((sum, el) => (sum + el), 0);

    useEffect(() => {
      setPurchasable(keysValueSum > 0);
    });
  };

  const addIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = price;
    const newPrice = oldPrice + priceAddition;

    setPrice(newPrice);
    setIngredients(updatedIngredients);
  };

  const removeIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = price;
    const newPrice = oldPrice - priceDeduction;

    setPrice(newPrice);
    setIngredients(updatedIngredients);
  };

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    alert('Continue...');
  };

  const disabledInfo = {
    ...ingredients,
  };
  Object.keys(disabledInfo).forEach((key) => {
    disabledInfo[key] = disabledInfo[key] <= 0;
  });

  updatePurchasableInfo(ingredients);

  return (
    <Aux>
      <Modal
        showed={purchasing}
        modalClosed={purchaseCancelHandler}
      >
        <OrderSummary
          ingredients={ingredients}
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
          total={price}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildCtrls
        disabled={disabledInfo}
        onBtnAddIngredient={addIngredientHandler}
        onBtnRemoveIngredient={removeIngredientHandler}
        ordered={purchaseHandler}
        purchasable={purchasable}
        price={price}
      />
    </Aux>
  );
};

export default Builder;
