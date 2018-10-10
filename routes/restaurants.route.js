const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/restaurants.controller')

router.get('/', ctrl.fetchRestaurants);

module.exports = router;