const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/orders.controller')

router.get('/', ctrl.fetchOrders);
router.get('/:id', ctrl.findOrder);

// router.post('/', ctrl.createUser);
// router.put('/:id', ctrl.editUser);
// router.delete('/:id', ctrl.deleteUser);

module.exports = router;
