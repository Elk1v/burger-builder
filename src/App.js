import React from 'react';
import styled from 'styled-components';

import Layout from './components/Layout/Layout';
import Builder from './containers/Builder/Builder';

const Section = styled.section`
  width: 300px;
  height: 300px;
  
`;

const App = () => (
  <Section>
    <Layout>
      <Builder />
    </Layout>
  </Section>
);

export default App;
