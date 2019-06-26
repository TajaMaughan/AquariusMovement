import React from 'react';
import Navbar from './components/Navbar';
import Post from './components/Post';
import AllPosts from './components/AllPosts';

function App() {
  return (
    <div>
      <Navbar />
      <Post />
      <AllPosts />
    </div>
  );
}

export default App;
