import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger'


class Dumb extends React.Component {
  constructor(props) {
    super(props);
    console.log('Dumb props passed on from container:', props)
  }

  handleClick = () => {
    //console.log('Dumb props passed on from container:', this.props)
    this.props.getRepos();
  }

  render() {
    return (
      <div>
        hi there from Dumb

          <button onClick={this.handleClick}>hier</button>

      </div>
    )
  }
}

const someData = (state) => {
  return { data: state };
}

 const Container = connect(null, {getRepos})(Dumb)


//reducer
const klik = (state, action) => {
  if (action.type == 'GEKLIKT') {
    console.log('reducer says GEKLIKT');
    return null
  }
}

//reducer
const data = (state = ' Bert ') => {
  //console.log('reducer,data=', state);
  return state;
}

//actioncreator
const geklikt = () => ({
  type: 'GEKLIKT',
  data: 'bla'
});

//thunk
const GET_REPOS = "GET_REPOS";

export function getRepos() {
    return function action(dispatch) {
     // dispatch({type: GET_REPOS})
     const url = `https://api.github.com/users/reduxjs/repos?sort=updated`;
     const request = fetch(url);
     return request.then(response => response.json())
      .then(json => {
          console.log("thunk getRepos called: getrepos data=", json);
          dispatch(geklikt())
      })
     .then(err => {
          //console.log(“error”, err);
     });
};
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
  klik,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
