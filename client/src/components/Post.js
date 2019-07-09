import React, { Component } from 'react';
import API from '../utils/API';
import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Post extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      body: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ body: value })
  }

  createPost = event => {
    const value = this.state;
    API.createPost({
      title: value.title,
      body: value.body
    });
  };
  render() {
    return (
      <div className="container">
        <form>
          <Quill name="body" className="black-text" value={this.state.body} onChange={this.handleChange} />
          <button onClick={this.createPost}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Post;