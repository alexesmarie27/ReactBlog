import React, { Component } from 'react';
import { Grommet } from 'grommet';

import './App.css';
import BlogPost from './BlogPost';

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
        <BlogPost>
          <p>This is a test!!!</p>
        </BlogPost>
      </Grommet>
    );
  }
}

export default App;
