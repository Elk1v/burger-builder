import React from 'react';
import PT from 'prop-types';
import shortid from 'shortid';
import styled from 'styled-components';

import Ingredient from './Ingredient/Ingredient';

const Wrapper = styled.section`
  width: 100%;
  height: 250px;
  margin: auto;
  overflow: scroll;
  text-align: center;
  
  font-weight: bold;
  font-size: 1.2rem;
  
   @media (min-width: 500px) and (min-height: 400px) { 
     width: 350px;
     height: 300px;
  }
  
   @media (min-width: 500px) and (min-height: 401px) { 
     width: 450px;
     height: 400px;
  }
   @media (min-width: 1000px) and (min-height: 700px) { 
     width: 700px;
     height: 600px;
  }
`;

const Burger = (props) => {
  const { ingredients } = props;

  let transformedIngredients = Object.keys(ingredients)
    .map((ingKey) => [...Array(ingredients[ingKey])]
      .map(() => <Ingredient key={shortid.generate()} type={ingKey} />))
    .reduce((arr, el) => arr.concat(el), []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start building your burger!</p>;
  }

  return (
    <Wrapper>
      <Ingredient type="bread-top" />
      {transformedIngredients}
      <Ingredient type="bread-bottom" />
    </Wrapper>
  );
};

Burger.propTypes = {
  ingredients: PT.objectOf(PT.number).isRequired,
};

export default Burger;
