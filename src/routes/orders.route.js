const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/orders.controller')

router.get('/:restaurantId/orders', ctrl.fetchOrders);
router.get('/:restaurantId/orders/:id', ctrl.findOrder);

// router.post('/', ctrl.createUser);
// router.put('/:id', ctrl.editUser);
// router.delete('/:id', ctrl.deleteUser);

module.exports = router;
