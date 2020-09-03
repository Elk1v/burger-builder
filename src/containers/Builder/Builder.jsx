import React, { useEffect, useState } from 'react';

import axios from '../../axios-orders';

import Aux from '../../hocs/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildCtrls from '../../components/Burger/BuildCtrls/BuildCtrls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withHandlerError from '../../hocs/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  bacon: 1,
  cheese: 0.6,
  meat: 1.5,
  salad: 0.3,
};

const Builder = () => {
  const [ingredients, setIngredients] = useState(null);
  const [price, setPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('https://burger-builder-58017.firebaseio.com/ingredients.json')
      .then((response) => {
        setIngredients(response.data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

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
    const newPrice = price + priceAddition;

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
    setLoading(true);
    const order = {
      orderIngredients: ingredients,
      orderPrice: price,
      customer: {
        name: 'Matey',
        address: {
          street: 'San Pompilio Pirrotti 4',
          zipCOde: '83100',
          country: 'Italy',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'premium',
    };

    axios.post('/orders.json', order)
      .then((response) => {
        setLoading(false);
        setPurchasing(false);
        return response;
      })
      .catch((err) => {
        setLoading(false);
        setPurchasing(false);
        return err;
      });
  };

  const disabledInfo = {
    ...ingredients,
  };
  Object.keys(disabledInfo).forEach((key) => {
    disabledInfo[key] = disabledInfo[key] <= 0;
  });

  let orderSummary = null;

  let burger = error ? <p>Ingredients can`t be loaded</p> : <Spinner />;

  if (ingredients) {
    burger = (
      <Aux>
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

    orderSummary = (
      <OrderSummary
        ingredients={ingredients}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
        total={price}
      />
    );
  }

  if (loading) {
    orderSummary = <Spinner />;
  }

  updatePurchasableInfo(ingredients);

  return (
    <Aux>
      <Modal
        showed={purchasing}
        modalClosed={purchaseCancelHandler}
      >
        {orderSummary}
      </Modal>
      {burger}
    </Aux>
  );
};

export default withHandlerError(Builder, axios);
