import React from 'react'
import HomeScreen from "../Screen/HomeScreen";
import {
  
  Routes,
  Route,
} from "react-router-dom";

import Login from "../Screen/Login";
import Dashboard from "../Screen/Dashboard";
import AddBills from "../Screen/Bills/AddBills";
import ViewBills from "../Screen/Bills/ViewBills";
import AddItems from "../Screen/Inventory/AddItems";
import ViewItems from "../Screen/Inventory/ViewItems";
import Account from "../Screen/Account";
import UserScreen from '../Screen/UserScreen';

const UserRoute = () => {
  return (
    <div>
     
            <Routes>
              <Route path="/" Component={HomeScreen}/> 
              <Route path="/login" Component={Login}/>
              <Route path="/dashboard" Component={Dashboard}/>
              <Route path="/addBill" Component={AddBills}/>
              <Route path="/viewBill" Component={ViewBills}/>
              <Route path="/addItems" Component={AddItems}/>
              <Route path="/viewItems" Component={ViewItems}/>
              <Route path="/account" Component={Account}/>
            </Routes>
       
    </div>
  )
}

export default UserRoute
