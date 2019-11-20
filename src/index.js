import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Test from './components/test';

import './index.scss';

const App = () => {
  console.log('alert');

  const [test, setTest] = useState('false');

  return (
    <div onClick={() => setTest('true')}>
      This is my App {test}
      <Test />
    </div>
  );
};

/* eslint-disable no-undef */
if (module.hot) {
  module.hot.accept();
}
/* eslint-enable no-undef */

ReactDOM.render(<App />, document.getElementById('root'));
