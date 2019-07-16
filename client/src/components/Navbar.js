import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Post from './Post';
import AllPosts from './AllPosts';

const Navbar = () => {
  return (
    <nav>
      <Router>
        <div className="nav-wrapper blue darken-2">
          <Link to="/" className="brand-logo center">
            Aquarius Movement
          </Link>
          <ul id="nav-mobile" className="left">
            <li>
              <Link to="/allposts">All Posts</Link>
            </li>
            <li>
              <Link to="/post">New Post</Link>
            </li>
          </ul>
        </div>

        <Route path="/post" component={Post} />
        <Route exact path="/" component={AllPosts} />
        <Route path="/allposts" component={AllPosts} />
      </Router>
    </nav>
  );
};

export default Navbar;
