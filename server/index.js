const express = require('express');
const parser = require('body-parser');
const dab = require('../database/index.js');
const path = require('path');
const morgan = require('morgan');

const app = express();
const PORT = 3002;

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/searchbar/:id', (req, res) => {
	console.log(req.params);
	dab.getProducts(req.params.id, (err, data) => {
		if (err) {
			console.error(err);
			res.status(404).send('error retrieving products');
		} else {
			res.status(200).send(data);
		}
	});
});

app.listen(PORT, () => {
	console.log(`server is listening on post apocalyptic ${PORT}`);
});
