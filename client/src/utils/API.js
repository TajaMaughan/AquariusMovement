import axios from 'axios';

export default {
  createPost: function(postData) {
    return axios.post('/api/post', postData);
  },
  allPosts: function(postData) {
    return axios.get('/api/post/all', postData);
  }
};
