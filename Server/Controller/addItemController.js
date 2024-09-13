const addItems = require('../Model/addItems');


const postItems = async (req,res) => {
    const {itemName,unitPrice,quantity,Distributor,orderDate} = req.body;

    try{
        const newItem = new addItems({
            itemName,
            unitPrice,
            quantity,
            Distributor,
            orderDate,
          });
            const additems = await newItem.save();
            if(additems){
                res.status(200).json(additems);
            }
    }
    catch(err){
        
        console.error(err.message)
    }

}


module.exports={
    postItems
}