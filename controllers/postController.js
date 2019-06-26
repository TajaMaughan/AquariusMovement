const db = require('../models');

module.exports = {
  create: function(req, res) {
    db.Post.create(req.body)
      .then(post => res.json(200).send(post))
      .catch(err => res.status(400).send(err));
  },
  findAll: function(req, res) {
    db.Post.findAll(req.query)
      .then(postData => res.json(postData))
      .catch(err => res.status(400).json(err));
  }
};
