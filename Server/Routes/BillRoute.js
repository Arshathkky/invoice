const express = require('express');
const router = express.Router();
const billController = require('../Controller/billController');


router.post('/addBill',billController.AddBills);
router.get('/getId',billController.getInvoiceId);
router.get('/getBill',billController.getBill);
router.get('/salesData',billController.getSalesData);

module.exports=router;