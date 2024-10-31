const {withNativeWind} = require('nativewind/metro');
const { request } = require('express');
const addItems = require('../Model/addItems');


const postItems = async (req,res) => {
    const {items} = req.body;
    console.log(items)

    try{
        const newItem = new addItems({
            items:items,
            
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
                {"items.itemName": item.itemName},
                {$inc : {"items.$.quantity":-item.quantity}}
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
            "items.itemName": {$regex: searchTerm , $options : 'i'}
        })
        res.status(200).json(items);
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Failed to search items' });
    }
}

const lowItems = async (req,res) =>{

    const category = req.query.category || ''
    
    try{
        const matchStage = category ? { $match: {"items.category" : category}} : {$match:{}}
        const response = await addItems.aggregate([
            {$unwind:"$items"},
            matchStage,
            {$sort:{"items.quantity":1}},
            {$limit:25},
            {$project:{"items.itemName":1,"items.quantity":1,"items.Distributor":1,"items.category":1}}
        ])
        

        if(response.length>0){
            console.log("top 10 items",response)
            res.status(200).json(response)
        }
        else {
            console.log('No products found.');
        }
    }
    catch (err){
        console.error('Error retrieving top 25 minimum quantity:', err);
    }
}



module.exports={
    postItems,
    getItems,
    updateItems,
    searchItems,
    lowItems,
    darkMode: "media"
}