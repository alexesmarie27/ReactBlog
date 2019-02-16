import React, { Component } from 'react';
import { Grommet } from 'grommet';

import './App.css';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
      Test web page
      </Grommet>
    );
  }
}

export default App;
