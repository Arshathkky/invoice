const express= require('express');
const router = express.Router();

const itemsController = require('../Controller/addItemController')

router.post('/',itemsController.postItems);
router.get('/view',itemsController.getItems);
router.put('/quantity',itemsController.updateItems);

module.exports = router;