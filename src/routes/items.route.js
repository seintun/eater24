const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/items.controller')

router.get('/:restaurantId/items', ctrl.fetchItems);
router.get('/:restaurantId/items/:id', ctrl.findItem);

router.post('/:restaurantId/items', ctrl.createItem);
// router.put('/:id', ctrl.editItem);
// router.delete('/:id', ctrl.deleteItem);

module.exports = router;