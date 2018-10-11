const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/restaurants.controller')

router.get('/', ctrl.fetchRestaurants);
router.get('/:id', ctrl.findRestaurant);

router.post('/', ctrl.createRestaurant);
// router.put('/:id', ctrl.editRestaurant)
// router.delete('/:id', ctrl.deleteRestaurant);

module.exports = router;