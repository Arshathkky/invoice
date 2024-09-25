import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import './Style/style.css'
import './App.css'


import Userlayout from './Layout/Userlayout'
import Top from './Component/Top';

import LineCharts from "./Component/LineCharts";

function App() {
  
  return (
    <div>

      
      {<Top/>}
      <Userlayout/>
   
    </div>
  );
}

export default App;
