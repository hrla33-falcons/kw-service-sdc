const Pool = require('pg').Pool;

// using Pool instead of Client bc Pool supports concurrent requests and respresents
// multiple Client "instances"
const db = new Pool({
  user: 'katherinewang',
  host: 'localhost',
  database: 'ikea',
  password: null,
  port: 5432
});

db.connect(err => {
  if (err) {
    console.log(err);
  } else {
    // double check connection by querying the current date and time
    db.query('SELECT NOW()', (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Connected to pg:', res.rows[0].now);
      }
    });
  }
});

/* --API CALLS-- */

// check if there are 10M records
const getCount = function(callback) {
  db.query('SELECT COUNT(*) FROM products', (err, result) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log(result);
      callback(null, result.rows[0].count);
    }
  });
};

const autoSearch = function(query, callback) {
  // ^: matches the beginning of the input
  // \b: matches a word boundary - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#special-word-boundary
  // i: ignore case sensitivity
  // var regex = new RegExp(`^${query}|\\b${query}`, `i`);
  var queryString = `SELECT * FROM products WHERE name ~* '^${query}'`;
  db.query(queryString, (err, result) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log(result);
      callback(null, result.rows);
    }
  });
};

module.exports = {
  getCount,
  autoSearch
};
