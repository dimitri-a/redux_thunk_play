import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';


const action = type => store.dispatch({ type })


const Counter = ({ onIncrement,onDecrement, val }) => {
  return <div>
    {val}
    <button onClick={onIncrement}>increase</button>
    <button onClick={onDecrement}>decrease</button>
  </div>
}


export const increment = () => ({
  type: 'INCREMENT'
})

export const decrement = () => ({
  type: 'DECREMENT'
})

const reducer = (state = 0, action) => {
  debugger
  switch (action.type) {

    case 'INCREMENT':
      console.log('reducer: increment')
      return state + 1

      case 'DECREMENT':
      console.log('reducer: increment')
      return state -1

    default:
      return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const render = () => ReactDOM.render(
  <Counter val={store.getState()}
    onIncrement={()=>store.dispatch(increment())}
    onDecrement={()=>store.dispatch(decrement())}
  />
  ,
  document.getElementById('root')
);



store.subscribe(render);
render();




