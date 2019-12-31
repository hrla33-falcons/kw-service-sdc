const express = require('express');
const parser = require('body-parser');
const db = require('../database/index.js');
const path = require('path');
const morgan = require('morgan');

const app = express();
const PORT = 3002;

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(PORT, () => {
  console.log(`Connected to ${PORT}`);
});

app.get('/searchbar/count', (req, res) => {
  db.getCount((err, data) => {
    if (err) {
      console.log(err);
      res.status(404).send("Couldn't get table count");
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/searchbar/:query', ({ params }, res) => {
  var query = params.query;
  db.autoSearch(query, (err, result) => {
    if (err) {
      console.log("Couldn't retrieve data: ", err);
      res.status(404).send("Couldn't retreive data");
    } else {
      console.log('Successfully retrieved data!');
      res.status(200).send(result);
    }
  });
});
