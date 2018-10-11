const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/users.controller')

router.get('/', ctrl.fetchUsers);
router.get('/:id', ctrl.findUser);

router.post('/', ctrl.createUser);
// router.put('/:id', ctrl.editUser);
// router.delete('/:id', ctrl.deleteUser);

module.exports = router;







// refactor asssigning as key:value for routes - FUTURE
//users.get()
//users.find(id)
//users.create({})
//users.update({})
//users.delete(id)