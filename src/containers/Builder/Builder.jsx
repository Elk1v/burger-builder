import React, { useState } from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

const BuildCtrl = styled.div``;

const Builder = () => {
  const [ingredients] = useState(
    {
      bacon: 1,
      cheese: 2,
      meat: 2,
      salad: 1,
    },
  );

  return (
    <Aux>
      <Burger ingredients={ingredients} />
      <BuildCtrl>build controller</BuildCtrl>
    </Aux>
  );
};

export default Builder;
