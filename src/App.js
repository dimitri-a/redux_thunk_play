import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from './Container'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Container/>
      </div>
    );
  }
}


export const klik =  (state) => {
  return state
}

export default App;
