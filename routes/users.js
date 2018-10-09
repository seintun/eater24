const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/users.controller')

router.get('/', ctrl.getUsers);
router.get('/:id', );

module.exports = router;