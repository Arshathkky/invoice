const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({

    description:{
        type:String,
        require:true

    },
    date:{
        type: date,
        require:true
    },
    amount:{
        type:Number,
        require:true,
    }
    

})