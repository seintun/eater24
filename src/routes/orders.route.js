const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/orders.controller')

router.get('/', ctrl.fetchOrders);
// router.get('/:id', ctrl.getOrder);

// router.post('/', ctrl.createOrder);
// router.put('/:id', ctrl.editOrder);
// router.delete('/:id', ctrl.deleteOrder);

module.exports = router;