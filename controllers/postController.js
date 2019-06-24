const db = require('../models');

module.exports = {
  create: function(req, res) {
    db.Post.create(req.body)
      .then(post => res.status(200).send(order))
      .catch(err => res.status(400).send(err));
  }
};
