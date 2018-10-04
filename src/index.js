import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, bindActionCreators, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import thunk from "redux-thunk";


const Dumb = ({ users, getData }) => {
  return (
    <div>
      This is Dumb
      <button onClick={getData}>Go</button>
      {users.map(user => <li>{user}</li>)}
    </div>
  )
}

const mydata = (state) => ({
  users: state
})


const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      dispatch(getData())
    }
  }
}


const ConnectedDumb = connect(mydata, mapDispatchToProps)(Dumb)


//https://jsonplaceholder.typicode.com/users

class Container extends React.Component {
  render() {
    return (
      <div>
        <ConnectedDumb />
      </div>
    )
  }
}

const getData = () => dispatch => {
  console.log('getData called');
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json)
    .then(data => {
        dispatch(received_data(data))
      })
    
}

const users = (state = ['Billy'], action) => {
  debugger;
  switch (action.type) {
    case 'RECEIVED_DATA':
      return action.data

    default:
      return state
  }
}

const received_data = (data) => ({
  type: 'RECEIVED_DATA',
  data
})



const store = createStore(
  users,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>
  ,
  document.getElementById("root")
);

