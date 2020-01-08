const Pool = require('pg').Pool;

// using Pool instead of Client bc Pool supports concurrent requests and respresents
// multiple Client "instances"
const db = new Pool({
  user: 'postgres',
  host: '54.219.181.246',
  database: 'ikea',
  password: 'root',
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
  var queryString = `SELECT * FROM products WHERE name ~* '^${query}' LIMIT 12`;
  db.query(queryString, (err, result) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log(result.rows);
      callback(null, result.rows);
    }
  });
};

const postTest = function(data, callback) {
  var queryString = `INSERT INTO products(id, name, type, dimension, img, relatedarticle) VALUES ('${data.id}', '${data.name}', '${data.type}', '${data.dimension}', '${data.img}', '${data.relatedarticle}');`;
  db.query(queryString, (err, result) => {
    if (err) {
      console.log("Couldn't add data due to err: ", err);
      callback(err);
    } else {
      console.log('Successfully added data!', data);
      callback(null, result);
    }
  });
};

module.exports = {
  postTest,
  db,
  getCount,
  autoSearch
};
