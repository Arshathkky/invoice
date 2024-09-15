const express= require('express');
const router = express.Router();

const itemsController = require('../Controller/addItemController')

router.post('/',itemsController.postItems);
router.get('/view',itemsController.getItems);

module.exports = router;