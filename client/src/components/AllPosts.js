import React, { Component } from 'react';
import API from '../utils/API';

class AllPosts extends Component {
  state = {
    allPosts: []
  };

  componentDidMount() {
    this.getAllPosts();
  }

  getAllPosts = () => {
    API.allPosts()
      .then(res =>
        this.setState({
          allPosts: res.data
        })
      )
      .catch(err => console.log(err));
  };

  listAllPosts = post => {
    return (
      <li key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </li>
    );
  };

  render() {
    return (
      <div>
        <ul>{this.state.allPosts.map(this.listAllPosts)}</ul>
      </div>
    );
  }
}
export default AllPosts;
