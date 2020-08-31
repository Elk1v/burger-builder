import React from 'react';
import styled from 'styled-components';

import Layout from './containers/Layout/Layout';
import Builder from './containers/Builder/Builder';

const Section = styled.section`
`;

const App = () => (
  <Section>
    <Layout>
      <Builder />
    </Layout>
  </Section>
);

export default App;
