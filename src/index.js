import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from '../../../Library/Caches/typescript/3.0/node_modules/redux';

const store =createStore(reducer);

store.subscribe(App);

const Counter = ({val,onIncrement}) => {

  return (
    <div>
      {val}
     <button onClick={onIncrement}>go</button>
    </div>
  )
}


const action = type => store.dispatch (type)

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter val={store.getState()} onIncrement={() =>action('INCREMENT')} />
      </div>
    );
  }
}


const reducer = (state = 0, action) => {
  switch (action.type) {

  case 'INCREMENT':
    return state++

  default:
    return state
  }
}


const render  = () => ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

render();

