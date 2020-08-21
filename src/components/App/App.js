import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  width: 300px;
  height: 300px;
  
  background: pink;
`;

const HeaderOne = styled.h1`
  color: red;
`;

const HeaderTwo = styled.h2`
  color: blue;
`;

const App = (props) => {
  const { a, b } = props;

  return (
    <Section>
      <HeaderOne>{ a }</HeaderOne>
      <HeaderTwo>{ b }</HeaderTwo>
    </Section>
  );
};

App.propTypes = {
  a: PT.string.isRequired,
  b: PT.string.isRequired,
};

export default App;
