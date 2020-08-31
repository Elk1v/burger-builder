import React, { useState } from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

import Aux from '../../hoc/Aux';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const Section = styled.section``;
const Main = styled.main`
  margin-top: 72px;
`;

const Layout = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  const sideDrawerClickHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <Aux>
      <Section>
        <Toolbar drawerToggleClicked={sideDrawerClickHandler} />
        <SideDrawer showed={showSideDrawer} closed={sideDrawerClosedHandler} />
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
