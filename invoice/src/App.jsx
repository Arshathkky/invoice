const {withNativeWind} = require('nativewind/metro');
import { useState } from "react";
import "'./global.css'";
import { GluestackUIProvider } from "@/'components/ui'/gluestack-ui-provider";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import './Style/style.css'
import './App.css'


import Userlayout from './Layout/Userlayout'
import Top from './Component/Top';

import LineCharts from "./Component/LineCharts";

function App() {
  
  return (
    <GluestackUIProvider mode="light"><div className="app">
        <Userlayout/>
      </div></GluestackUIProvider>
  );
}

export default App;
