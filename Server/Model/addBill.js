const  mongoose =require('mongoose');
const AutoIncrement =require( 'mongoose-sequence');

const AutoIncrementFactory = AutoIncrement(mongoose);

const BillSchema = new mongoose.Schema({
    customerName: String,
    id:{
        type:Number,
    }, 
    invoiceId:{
        type:Number,
        unique:true
    }, 
    description:{
        type: String,
        default :null
    },
    quantity:{
        type:Number,
        default :null
    }, 
    unitPrice:{
        type:Number,
        default :null
    }, 
    subTotal:{
        type:Number,
        default :null
    }, 
    total:{
        type:Number,
        default :null
    }
})


BillSchema.plugin(AutoIncrementFactory, { id: 'invoice_id_counter', inc_field: 'invoiceId' });
const Bill = mongoose.model('Bill',BillSchema);

module.exports= Bill;