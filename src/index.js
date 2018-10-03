import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, bindActionCreators, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import thunk from "redux-thunk";

class Dumb extends React.Component {
  constructor(props) {
    super(props);
    console.log("Dumb props passed on from container:", props);
  }

  handleClick = () => {
    //console.log('Dumb props passed on from container:', this.props)
    this.props.getRepos();
  };

  render() {
    console.log(this.props);
    return (
      <div>
        hi there from Dumb
        <button onClick={this.handleClick}>hier</button>

        <ul>
          {this.props.users.data.map(user => <li>{user.name}</li>)}
        </ul>


      </div>
    );
  }
}

const bla = dispatch =>
  bindActionCreators(
    {
      geklikt,
      getRepos
    },
    dispatch
  );

const mydata = (state) => ({
  users: state
})

const Container = connect(
  mydata,
  bla
)(Dumb);

// //reducer
// const klik = (state={}, action) => {
//   if (action.type == "GEKLIKT") {
//     console.log("reducer says GEKLIKT");
//     return null;
//   }
// };

//data reducer
const data = (state = [], action) => {
  //console.log('reducer,data=', state);
  debugger
  if (action.type === 'RECEIVED_DATA') {
    return action.payload;
  }
  else
    return state;
};




//actioncreator
const geklikt = () => ({
  type: "GEKLIKT",
  data: "bla"
});

export const received_data = (data) => ({
  type: 'RECEIVED_DATA',
  payload: data
})


//thunk
const getRepos = () => dispatch => {
  try {
    const url = `https://api.github.com/users/reduxjs/repos?sort=updated`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log("thunk: getrepos data=", json);
        dispatch(received_data(json));
      });
  } catch (error) {
    console.error(error);
  }
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}

const mainRed = combineReducers({ data })

const store = createStore(
  mainRed,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
