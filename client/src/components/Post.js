import React, { Component } from 'react';
import API from '../utils/API';
import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Post extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      title: '',
      body: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleTitleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

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
      <div>
        <form>
          <div className="input-field">
          <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange}/>
          </div>
          <br />
          <Quill name="body" value={this.state.body} onChange={this.handleChange} />
          <button onClick={this.createPost}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Post;