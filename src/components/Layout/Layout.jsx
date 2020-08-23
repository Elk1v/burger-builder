import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

import Aux from '../../hoc/Aux';

const Section = styled.section``;
const Main = styled.main``;

const Layout = (props) => {
  const { children } = props;

  return (
    <Aux>
      <Section>
        Toolbar,
        SideDrawer,
        BackDrop
      </Section>
      <Main>
        { children }
      </Main>
    </Aux>
  );
};

Layout.propTypes = {
  children: PT.node.isRequired,
};

export default Layout;
