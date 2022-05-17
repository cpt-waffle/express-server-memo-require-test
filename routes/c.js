const express = require('express');
const router = express.Router();
const { getEmployees } = require('../dbHelpers');

router.get('/', (req, res) => {
	getEmployees().then(data => {
		res.json(data)
	})
})

module.exports = router;