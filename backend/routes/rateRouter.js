const express = require('express');
const {rateAdd} = require('../controllers/rateController');

const router = express.Router();

router.post('/add-rate', rateAdd)

module.exports = router;