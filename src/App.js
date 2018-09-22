import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Container'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Container />
      </div>
    );
  }
}


//reducer
export const klik = (state, action) => {
  if (action.type == 'GEKLIKT') { }
  console.log('reducer: klik');

  return state

}

//reducer
export const data = (state = ' Bert ') => {
  //console.log('reducer,data=', state);
  return state;
}

//actioncreator
export const geklikt = () => ({
  type: 'GEKLIKT',
  data: 'bla'
});

export default App;
