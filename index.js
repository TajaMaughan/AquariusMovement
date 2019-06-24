const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use( express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});