import React from 'react';

import { connect } from 'react-redux';
import {Dumb} from './Dumb';

const someData = (state) => {
  return {data: 'boer'};
}

const Container = connect(someData,null)(Dumb)

export default Container