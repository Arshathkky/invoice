const express = require('express');
const router = express.Router();
const billController = require('../Controller/billController');


router.post('/addBill',billController.AddBills);
router.get('/getId',billController.getInvoiceId);
router.get('/getBill',billController.getBill);

module.exports=router;