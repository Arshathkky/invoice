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
const getSalesData = async (req, res) => {
    const { view } = req.query;
  
    try {
      let data;
  
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);
  
      const startOfWeek = new Date();
      startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Set to the start of the week
  
      const startOfMonth = new Date();
      startOfMonth.setDate(1); 
  
      if (view === 'day') {
        data = await Bill.aggregate([
          { $match: { date: { $gte: startOfDay } } },
          { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } }, total: { $sum: '$total' } } },
          { $sort: { _id: 1 } }
        ]);
      } else if (view === 'week') {
        data = await Bill.aggregate([
          { $match: { date: { $gte: startOfWeek } } },
          { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } }, total: { $sum: '$total' } } },
          { $sort: { _id: 1 } } 
        ]);
      } else if (view === 'month') {
        data = await Bill.aggregate([
          { $match: { date: { $gte: startOfMonth } } },
          { $group: { _id: { $dateToString: { format: '%Y-%m', date: '$date' } }, total: { $sum: '$total' } } },
          { $sort: { _id: 1 } }
        ]);
      }
  
     
      const formattedData = data.map(item => ({
        date: item._id, 
        total: item.total
      }));
  
      res.json(formattedData);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };

  

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
    getById
   
};