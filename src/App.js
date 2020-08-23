import React from 'react';
import styled from 'styled-components';

import Layout from './components/Layout/Layout';

const Section = styled.section`
  width: 300px;
  height: 300px;
  
  background: pink;
`;

const App = () => (
  <Section>
    <Layout>
      <p>testing</p>
    </Layout>
  </Section>
);

export default App;
