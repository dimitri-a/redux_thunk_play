import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, bindActionCreators, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import thunk from "redux-thunk";

const Dumb = ({ users }) => {
  console.log('users', users)
  return (
    <div>
      <ul>
        {users.map(user => <li>{user}</li>)}
      </ul>
    </div>
  )
}

const data = state => ({
  users: state
})


const ConnectedDumb =connect(data, null)(Dumb)


class Container extends React.Component {
  render() {

    return (
      <div>
        <ConnectedDumb></ConnectedDumb>
      </div>
    )
  }
}


//data reducer

const users = (state = ['Jack'], action) => {
  switch (action.type) {
    case 'RECEIVED_DATA':
      return action.data

    default:
      return state
  }
}



//actioncreator
export const receivedData = (payload) => ({
  type: 'RECEIVED_DATA',
  payload
})


//thunk
const getData = () => dispatch => {
  debugger
  fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json).then(
    data => dispatch(receivedData(data))
  )
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}



const store = createStore(
  users,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById("root")
);

