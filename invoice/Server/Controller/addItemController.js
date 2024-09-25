const { request } = require('express');
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

const getItems =async (req,res) =>{
    try {
        const items = await addItems.find();
        res.status(200).json(items);
        }
    catch(err){
        console.error(err)
    }
}

const updateItems = async(req,res) =>{
    const soldItems = req.body.items;
    try{
        await Promise.all(soldItems.map(async (item)=>{
           const result =  await addItems.updateOne(
                {itemName: item.itemName},
                {$inc : {quantity:-item.quantity}}
            );
            console.log("update success", result);
        }));

        res.status(200).json({status:"success"});
    }
    catch(err){
        console.error(err);
        res.status(500).json({status:"fail", error: err.message});
    }
}

const searchItems = async (req,res) =>{
    const searchTerm = req.query.q;
    try{
        const items = await addItems.find({
            itemName: {$regex: searchTerm , $options : 'i'}
        })
        res.status(200).json(items);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Failed to search items' });
    }
}

const lowItems = async (req,res) =>{
    try{
        const response = await addItems.find()
        .sort({quantity :1})
        .limit(10)
        .select('itemName quantity')

        if(response.length>0){
            console.log("top 10 items",response)
            res.status(200).json(response)
        }
        else {
            onsole.log('No products found.');
        }
    }
    catch (err){
        console.error('Error retrieving top 5 minimum prices:', err);
    }
}



module.exports={
    postItems,
    getItems,
    updateItems,
    searchItems,
    lowItems
}