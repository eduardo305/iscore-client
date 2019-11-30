import React from 'react';
import SoccerLoader from '../components/SoccerLoader';

const WithLoading = prop => Component => {
  return function WithLoadingComponent({ ...props }) {
    if (props[prop] && !props[prop].length) {
      return <SoccerLoader />;
    }

    return <Component {...props} />;
  };
};

export default WithLoading;
