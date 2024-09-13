const express = require('express')
const router = express.Router()
const userController = require('../Controller/UserController')

router.post('/',userController.getUser);

module.exports = router