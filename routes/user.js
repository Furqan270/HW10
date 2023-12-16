const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const UserController = require('../controller/user_controller')

router.get('/', UserController.getAll)
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.put('/:id', auth , UserController.update)
router.delete('/:id', auth , UserController.delete)
module.exports = router