const express= require('express');
const router = express.Router();

const itemsController = require('../Controller/addItemController')

router.post('/',itemsController.postItems);

module.exports = router;