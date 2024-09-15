const express = require('express');
const router = express.Router();
const billController = require('../Controller/billController');


router.post('/addBill',billController.AddBills);
router.get('/getId',billController.getInvoiceId);

module.exports=router;