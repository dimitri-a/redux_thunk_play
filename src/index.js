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
    console.log(this.props)
    this.props.getData();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>hier</button>
        <ul>
          {this.props.data && this.props.data.map(item => <li>item.name</li>)}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getData,
  },
  dispatch,
)
const bla = (state) => ({
  data: state.myData
});
const Container = connect(bla, mapDispatchToProps)(Dumb)


const url = `https://api.github.com/users/reduxjs/repos?sort=updated`;

const getData = () => dispatch => {
  fetch(url).then(response => response.json())
    .then(
      json => {
        debugger
        console.log('thunk returning json:', json);
        dispatch(receivedData(json));
      }
    )
}

//action
const receivedData = (data) => ({
  type: 'RECEIVED_DATA',
  data
});

//reducer
const myData = (state = [], action) => {
  debugger;
  if (action.type === 'RECEIVED_DATA') {
    return action.data;
  }
  return state;
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
  myData,
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
