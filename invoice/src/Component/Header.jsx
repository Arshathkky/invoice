import React from 'react'

const Header = ({invoiceId}) => {

    const  today = new Date();
  return (
    <div>
      Header
      <br/>
      
      {today.toLocaleDateString()}
      <br/>
      <h5>invoice id ={invoiceId}</h5>
    </div>
  )
}

export default Header
