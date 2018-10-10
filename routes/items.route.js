const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/items.controller')

router.get('/', ctrl.fetchItems);

module.exports = router;