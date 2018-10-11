const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/items.controller')

router.get('/', ctrl.fetchItems);
router.get('/:id', ctrl.findItem);

router.post('/', ctrl.createItem);
// router.put('/:id', ctrl.editItem);
// router.delete('/:id', ctrl.deleteItem);

module.exports = router;