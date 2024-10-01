const mongoose=require('mongoose');

const AddItemSchema = new mongoose.Schema({
    
    itemName:String,
    unitPrice:Number,
    quantity:Number,
    category:String,
    Distributor:String,
    orderDate:Date


});

const addItem = mongoose.model('addItem',AddItemSchema);

module.exports = addItem;