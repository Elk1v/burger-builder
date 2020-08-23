import React from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

const BuildCtrl = styled.div``;

const Builder = () => (
  <Aux>
    <Burger />
    <BuildCtrl>build controller</BuildCtrl>
  </Aux>
);

export default Builder;
