const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  var mysql = require('mysql2');
  var connection = mysql.createConnection(process.env.JAWSDB_URL);

  connection.connect();
} else {
  db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log('Aquarius Movement listening on PORT ' + PORT);
    });
  });
}

const routes = require('./routes/postRoutes');
app.use('/', routes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
