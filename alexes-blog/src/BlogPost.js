import React, { Component } from 'react';

class BlogPost extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default BlogPost;
