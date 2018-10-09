const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/restaurants.controller')

router.get('/', ctrl.getRestaurants);

module.exports = router;