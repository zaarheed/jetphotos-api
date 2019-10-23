const dotenv = require('dotenv').config();


module.exports = {
	cdnBaseUrl: process.env.CDN_BASE_URL,
	environment: process.env.NODE_ENV,
	lowDbBasePath: process.env.LOW_DB_BASE_PATH,
	zabihahBaseUrl: process.env.ZABIHAH_BASE_URL
};