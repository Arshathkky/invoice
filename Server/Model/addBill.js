const  mongoose =require('mongoose');
const AutoIncrement =require( 'mongoose-sequence');

const AutoIncrementFactory = AutoIncrement(mongoose);

const BillSchema = new mongoose.Schema({
    customerName: String,
    no:{
        type:Number,
    }, 
    invoiceId:{
        type:Number,
        unique:true
    }, 
    description:{
        type: String,
        
    },
    quantity:{
        type:Number,
        
    }, 
    unitPrice:{
        type:Number,
        
    }, 
    subTotal:{
        type:Number,
        
    }, 
    total:{
        type:Number,
        
    }
})


BillSchema.plugin(AutoIncrementFactory, { id: 'invoice_id_counter', inc_field: 'invoiceId' });
const Bill = mongoose.model('Bill',BillSchema);

module.exports= Bill;