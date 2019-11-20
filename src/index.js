import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

const App = () => {
  return <div>React Boilerplate - You are good to start coding...</div>;
};

/* eslint-disable no-undef */
if (module.hot) {
  module.hot.accept();
}
/* eslint-enable no-undef */

ReactDOM.render(<App />, document.getElementById('root'));
