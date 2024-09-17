const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const BillSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    invoiceId: {
        type: Number,
        unique: true,
       
    },
    items: [{
        itemName: String,
        quantity: Number,
        unitPrice: Number,
        subTotal: Number
    }],
    total: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Add auto-increment plugin for the invoiceId field
BillSchema.plugin(AutoIncrement, { id: 'invoice_id_counter', inc_field: 'invoiceId' });

const Bill = mongoose.model('Bill', BillSchema);

module.exports = Bill;
