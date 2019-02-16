import React, { Component } from 'react';

class BlogPost extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default BlogPost;
