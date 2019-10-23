const dotenv = require('dotenv').config();


module.exports = {
	cdnBaseUrl: process.env.CDN_BASE_URL,
	environment: process.env.NODE_ENV
};