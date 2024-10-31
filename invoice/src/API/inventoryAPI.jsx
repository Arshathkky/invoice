const {withNativeWind} = require('nativewind/metro');
import axios from "axios";
import "'./global.css'";
import { GluestackUIProvider } from "@/'components/ui'/gluestack-ui-provider";
import React, { useState } from "react";
const API_URL = 'http://localhost:3000/items'


export const getAllProduct = async() =>{
    try{
        const response = await axios.get(`${API_URL}/view`);
        return response.data
    }
    catch(err){
        console.error("error in fetching items",err);
    }
}


