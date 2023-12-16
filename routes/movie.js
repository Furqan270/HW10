const express = require('express')
const router = express.Router()
const MovieController = require('../controller/movie_controller')
const auth = require('../middleware/auth')
const { upload } = require('./upload')

router.get('/', MovieController.getAll)
router.get('/:id', MovieController.getOne)
router.post('/', auth, MovieController.create)
router.post('/upload', auth, upload.single('image'), MovieController.upload)
router.put('/update', auth , MovieController.update)
router.delete('/:id', auth , MovieController.delete)

module.exports = router; 