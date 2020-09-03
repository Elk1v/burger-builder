import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import Aux from '../../../hocs/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Window = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 25%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    transform: ${(props) => (props.showed ? 'translateY(0)' : 'translateY(-100vh)')};
    opacity: ${(props) => (props.showed ? '1' : '0')};
    
    @media (min-width: 600px) {
        width: 500px;
        left: calc(50% - 250px);
    }
`;

const Modal = ({ children, showed, modalClosed }) => (
  <Aux>
    <Backdrop
      showed={showed}
      closed={modalClosed}
    />
    <Window showed={showed}>
      {children}
    </Window>
  </Aux>
);

Modal.defaultProps = {
  children: null,
  modalClosed: null,
  showed: null,
};

Modal.propTypes = {
  children: PT.node,
  modalClosed: PT.func,
  showed: PT.oneOfType([
    PT.object,
    PT.bool,
  ]),
};

export default React.memo(Modal);
