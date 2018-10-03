import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';


const action = type => store.dispatch({type})


const Counter = ({onIncrement,value}) =>{
  return <div>
    {value}
    <button onClick={onIncrement}>increase</button>
  </div>
}


export const increment = (type) => ({
  type:'INCREMENT'
})


const reducer=(state = 0, action) => {
  switch (action.type) {

  case 'INCREMENT':
  console.log('reducer: increment')
    return state +1

  default:
    return state
  }
}


ReactDOM.render(
  <Provider store={store}>
    <Counter
    onIncrement={() => action(increment)}
     />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)
