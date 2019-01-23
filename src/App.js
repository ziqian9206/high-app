import React, { Component } from 'react';

import A from './components/a'
import B from './components/b'
import C from './components/c'

export default class App extends Component {
  render() {
    return (
      <div>
        <A />
        <B />
        <C name={'wzqc'} age ={19} />
      </div>
    )
  }
}

