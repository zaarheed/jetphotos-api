const axios = require("axios");
const router = require("express").Router();
const _ = require("lodash");
const { cdnBaseUrl } = require('../config/env');
const request = require("request");
const cheerio = require("cheerio");


router.get('', (req, res) => getPhoto(req, res));


async function getPhoto(req, res) {

	const query = req.query["query"];

	if (!query) {
		res.status(400).json("query is invalid");
		return;
	}

	const photoId = await _getPhotoIdByQuery(query); // something like 5/12345

	if (!photoId) {
		res.status(404).json("nothing found");
	}

	request(`${cdnBaseUrl}/full/${photoId}`).pipe(res);
	return;
}


async function _getPhotoIdByQuery(query) {
	const url = `https://www.jetphotos.com/photo/keyword/${query}`;

	const html = await axios.get(url);

	if (!html) {
		return null;
	}

	let $ = cheerio.load(html.data);

	let imageContainers = $('.result__photoLink');

	if (!imageContainers) {
		return null;
	}

	let imageContainer = imageContainers[0];

	if (!imageContainer) {
		return null;
	}

	let image = imageContainer.children[1].attribs.src;

	if (!image) {
		return null;
	}

	let split = image.substr(2).split('/');

	let id = split[split.length - 2] + "/" + split[split.length - 1];

	return id;
}


module.exports = router;