import './Style/style.css'
import './App.css'
import HomeScreen from "./Screen/HomeScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import { invoke } from '@tauri-apps/api';  

// async function startBackend() {
//   try {
//     await invoke('start_backend');  
//     console.log('Backend started successfully');
//   } catch (error) {
//     console.error('Failed to start backend:', error);
//   }
// }


// startBackend();

import Login from "./Screen/Login";
import Dashboard from "./Screen/Dashboard";
import AddBills from "./Screen/Bills/AddBills";
import ViewBills from "./Screen/Bills/ViewBills";
import AddItems from "./Screen/Inventory/AddItems";
import ViewItems from "./Screen/Inventory/ViewItems";
import Account from "./Screen/Account";

function App() {
  
  return (
    <Router>

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
     
    </Router>
  );
}

export default App;
