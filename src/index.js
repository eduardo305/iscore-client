import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  console.log('alert')
  alert('App')

  return (
    <div>This is my App</div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));