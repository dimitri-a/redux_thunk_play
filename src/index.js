import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';


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

const bla = dispatch => bindActionCreators(
  {
    geklikt,
    getRepos
  },
  dispatch,
)

const Container = connect(null, bla)(Dumb)


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
const getRepos = () =>dispatch => {
  try {
    const url = `https://api.github.com/users/reduxjs/repos?sort=updated`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log('thunk: getrepos data=',json);
        //dispatch(addRepos(json))
      })

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
