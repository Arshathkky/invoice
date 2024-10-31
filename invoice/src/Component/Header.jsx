const {withNativeWind} = require('nativewind/metro');
import React from 'react'
import "'./global.css'";
import { GluestackUIProvider } from "@/'components/ui'/gluestack-ui-provider";
import getFormatDate from './AdditionalComponent/getFormatData'


const Header = ({invoiceId}) => {

    const  today = getFormatDate();
  return (
    <div>Header
            <br/>
      {today}
      <br/>
      <h5>invoice id ={invoiceId}</h5>
    </div>
  );
}

export default Header
