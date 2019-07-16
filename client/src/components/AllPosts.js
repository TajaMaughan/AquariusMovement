import React, { Component } from 'react';
import API from '../utils/API';
import parse from 'html-react-parser';
import moment from 'moment';

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
    const body = post.body;
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <li key={post.id}>
              {parse(body)}
              <h6>Posted on {moment(post.createdAt).format('LLL')}</h6>
              <div className="divider" />
            </li>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="black-text">
        <ul>{this.state.allPosts.map(this.listAllPosts)}</ul>
      </div>
    );
  }
}
export default AllPosts;
