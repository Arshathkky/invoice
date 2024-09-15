const Bill = require('../Model/addBill');

const AddBills = async (req,res) =>{
    const { customerName, quantity,unitPrice,subTotal,total} = req.body;
        
    try{
        const bill = new Bill(
            {
                customerName:customerName,
                quantity:quantity,
                unitPrice:unitPrice,
                subTotal:subTotal,
                total:total
            }
            
        )
        const response = bill.save();

        if(response){
            res.status(200).json(response)
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
    }
    catch(err){
      console.error
    }
}

module.exports = {AddBills,getInvoiceId};