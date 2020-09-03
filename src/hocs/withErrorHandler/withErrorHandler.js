import React, { useState, useEffect } from 'react';

import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

const withHandlerError = (WrappedComponent, axios) => (props) => {
  const [error, setError] = useState(null);
  const [responseInterceptor, setResponseInterceptor] = useState(undefined);
  const [requestInterceptor, setRequestInterceptor] = useState(undefined);

  useEffect(() => {
    const responseIntercepterIndex = axios.interceptors.response
      .use((response) => response, (err) => {
        setError(err);
      });
    setResponseInterceptor(responseIntercepterIndex);

    const requestInterceptorIndex = axios.interceptors.request.use((request) => {
      setError(null);
      return request;
    });
    setRequestInterceptor(requestInterceptorIndex);

    return () => {
      if (responseInterceptor) {
        axios.interceptors.request.eject(responseInterceptor);
      }

      if (requestInterceptor) {
        axios.interceptors.request.eject(requestInterceptor);
      }
    };
  }, []);

  const errorConfirmedHandler = () => {
    setError(null);
  };

  return (
    <Aux>
      <Modal
        showed={error}
        modalClosed={errorConfirmedHandler}
      >
        {error ? error.message : null}
      </Modal>
      <WrappedComponent {...props} />
    </Aux>
  );
};

export default withHandlerError;
