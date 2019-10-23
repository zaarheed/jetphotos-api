const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const _ = require('lodash');
const api = require('./api');
const port = process.env.PORT || 8001;
const env = require('./config/env');

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", '*');
	res.header("Access-Control-Allow-Credentials", true);
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json,Authorization');
	next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(api);

app.listen(port, () => {
	console.log('We are live on ' + port);
});