import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';
import burgerLogo from '../../img/burger-logo.png';

const Wrapper = styled.div`
  height: ${(props) => props.height};
  padding: 8px;
  margin-bottom: ${(props) => props.marginBottom};
  box-sizing: border-box;
  background-color: white;
  border-radius: 5px;
`;

const LogoImg = styled.img`
  height: 100%;
`;

const Logo = ({ logoHeight, marginBottom }) => (
  <Wrapper
    height={logoHeight}
    marginBottom={marginBottom}
  >
    <LogoImg src={burgerLogo} alt="Burger logo" />
  </Wrapper>
);

Logo.defaultProps = {
  logoHeight: '100%',
  marginBottom: null,
};

Logo.propTypes = {
  logoHeight: PT.string,
  marginBottom: PT.string,
};

export default Logo;
