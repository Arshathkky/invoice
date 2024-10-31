const {withNativeWind} = require('nativewind/metro');
const Bill = require('../Model/addBill');

const AddBills = async (req,res) =>{
    const {invoiceId, customerName,items,total,date} = req.body;
        
    try{
        const bill = new Bill(
            {
                invoiceId: invoiceId,
                customerName: customerName,
                items: items,
                total: total,
                date:date
                
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
        const bill = await Bill.find().sort({invoiceId:-1});
        res.status(200).json(bill);
        
    
    }
    catch(err){
        console.error(err);
    }
}
const getSalesData = async (req,res)=>{
    const {view} = req.query;
}


const getById = async (req,res) =>{
  const { invoiceId}  = req.body;

  try{
    const bill = await Bill.find({invoiceId : invoiceId})
    if(!bill){
      return  res.status(404).json({message:"No bill found"})
    }
    res.json(bill)

  }
  catch(err){
    console.error('Error finding product by name:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}






module.exports = {
    AddBills,
    getInvoiceId,
    getBill,
    getSalesData,
    getById,
    darkMode: "media"
};