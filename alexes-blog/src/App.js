import React, { Component } from 'react';
import { Box, Grid, Grommet, Image, Paragraph } from 'grommet';

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
      <Grommet theme={theme} id="grommet">
        <Grid
          style={{height: '100vh'}}
          rows={['20%', '80%']}
          columns={['30%', '70%']}
          gap="small"
          areas={[
            { name: 'header', start: [0, 0], end: [1, 0] },
            { name: 'nav', start: [0, 1], end: [0, 1] },
            { name: 'main', start: [1, 1], end: [1, 1] },
          ]}
        >
          <Box gridArea="header" background="brand" />
          <Box gridArea="nav" background="light-5" />
          <Box gridArea="main" background="light-2" />
        </Grid>


        {/* <BlogPost>
          <Paragraph className="blog-post-paragraph" margin="large">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
          </Paragraph>
          <Box justify="center" alignContent="center">
            <Image
              fit="contain"
              src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
            />
          </Box>
          <Paragraph className="blog-post-paragraph" margin="large">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </BlogPost> */}
      </Grommet>
    );
  }
}

export default App;
