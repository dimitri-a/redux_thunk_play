import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';


const Counter = () => {
  return (
    <div>
      hi from counter
    </div>
  )
}


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}


const render  = () => ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

render();
