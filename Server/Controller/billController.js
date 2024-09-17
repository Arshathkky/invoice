const Bill = require('../Model/addBill');

const AddBills = async (req,res) =>{
    const {invoiceId,no,itemName, customerName, quantity,unitPrice,subTotal,total} = req.body;
        
    try{
        const bill = new Bill(
            {
                invoiceId:invoiceId,
                no:no,
                customerName:customerName,
                itemName:itemName,
                quantity:quantity,
                unitPrice:unitPrice,
                subTotal:subTotal,
                total:total
            }
            
        )
        const response = bill.save();

        if(response){
            res.status(200).json({status:"success"})
        }
    }
    catch(err){
            console.error("does not store",err);
    }
}

const getInvoiceId = async (req,res)=>{

    try{
        const response = await Bill.findOne().sort({invoiceId :-1});
        res.status(200).json(response.invoiceId)
        console.log(response.invoiceId)
    }
    catch(err){
      console.error
    }
}

const getBill = async(req,res) =>{
    try{
        const bill = await Bill.find();
        res.status(200).json(bill);
        
    
    }
    catch(err){
        console.error(err);
    }
}

module.exports = {
    AddBills,
    getInvoiceId,
    getBill
};