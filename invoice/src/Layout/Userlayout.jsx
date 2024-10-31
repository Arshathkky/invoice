const {withNativeWind} = require('nativewind/metro');
import React from 'react'
import "'./global.css'";
import { GluestackUIProvider } from "@/'components/ui'/gluestack-ui-provider";
import Navbar from '../Component/Navbar'
import Top from '../Component/Top'
import UserRoute from '../Routes/userRoute'



const Userlayout = () => {
  return (
    <div>
      <UserRoute/>
      <Top/>
    </div>
  );
}

export default Userlayout
