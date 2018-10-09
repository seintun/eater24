const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/orders.controller')

router.get('/', ctrl.getOrders);
router.get('/:id', );

module.exports = router;