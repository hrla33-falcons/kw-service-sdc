const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ikea', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB connected successfully!'));

let productsSchema = mongoose.Schema({
  product_ID: Number,
  name: String,
  type: String,
  dimensions: String,
  img: String,
  relatedArticles: String
});

let products = mongoose.model('products', productsSchema);

let getCount = () => {
  return new Promise((resolve, reject) => {
    products.count({}, (err, count) => {
      if (err) {
        reject(err);
      } else {
        resolve(count);
      }
    });
  });
};

let autoSearch = query => {
  var regex = new RegExp(`^${query}|\\b${query}`, `i`);
  return new Promise((resolve, reject) => {
    products
      .find({ name: regex }, (err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      })
      .limit(12);
  });
};

module.exports = {
  autoSearch,
  getCount
};
