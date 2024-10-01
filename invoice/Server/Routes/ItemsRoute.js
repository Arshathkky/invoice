const express= require('express');
const router = express.Router();

const itemsController = require('../Controller/addItemController')

router.post('/',itemsController.postItems);
router.get('/view',itemsController.getItems);
router.get('/search', itemsController.searchItems);
router.put('/quantity',itemsController.updateItems);
router.get('/lowItems',itemsController.lowItems);

module.exports = router;