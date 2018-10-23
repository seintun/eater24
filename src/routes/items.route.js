const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/items.controller')

//when specific restaurant with Id is reached and . . .

//requesting list of restaurant's menu items
router.get('/:restaurantId/items', ctrl.fetchItems);
// requesting specific menu item's with provided itemId 
router.get('/:restaurantId/items/:id', ctrl.findItem);

//requesting to create new menu item 
router.post('/:restaurantId/items', ctrl.createItem);
router.put('/:restaurantId/items/:id', ctrl.editItem);
router.delete('/:restaurantId/items/:id', ctrl.deleteItem);

module.exports = router;