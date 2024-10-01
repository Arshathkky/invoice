import React from 'react'
import getFormatDate from '../Screen/Inventory/AdditionalComponent/Date'

const Header = ({invoiceId}) => {

    const  today = getFormatDate()
  return (
    <div>
      Header
      <br/>
      
      {today}
      <br/>
      <h5>invoice id ={invoiceId}</h5>
    </div>
  )
}

export default Header
