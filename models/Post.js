module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    body: DataTypes.TEXT
  });

  return Post;
};
