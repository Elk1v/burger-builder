import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const BackdropEl = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  
`;

const Backdrop = ({ showed, closed }) => (
  showed && <BackdropEl onClick={closed} />
);

Backdrop.defaultProps = {
  showed: null,
};

Backdrop.propTypes = {
  closed: PT.func.isRequired,
  showed: PT.oneOfType([
    PT.bool,
    PT.object,
  ]),
};

export default Backdrop;
