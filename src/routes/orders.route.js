const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/orders.controller')

//when specific restaurant with Id is reached and . . .

//requesting list of restaurant's orders
router.get('/:restaurantId/orders', ctrl.fetchOrders);
// requesting specific order with provided itemId 
router.get('/:restaurantId/orders/:id', ctrl.findOrder);

//requesting to create new order with provided array of items from the front end 
router.post('/:restaurantId/orders', ctrl.createOrder);

router.post('/', ctrl.fetchUserOrders);
router.put('/:id', ctrl.editOrder);
router.delete('/:id', ctrl.deleteOrder);

module.exports = router;
