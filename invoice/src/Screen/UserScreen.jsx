const {withNativeWind} = require('nativewind/metro');
import React from 'react'
import "'./global.css'";
import { GluestackUIProvider } from "@/'components/ui'/gluestack-ui-provider";
import Top from '../Component/Top'
import Dashboard from './Dashboard'

const UserScreen = () => {
  return (
    <div>
      <Top/>
      <Dashboard/>
    </div>
  );
}

export default UserScreen
