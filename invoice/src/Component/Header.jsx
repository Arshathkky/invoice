import React from 'react'

const Header = ({invoiceId}) => {

    const  today = new Date();
  return (
    <div>
      Header
      <br/>
      Customer name:
      <input className='' type='text' name='customer' />
      {today.toLocaleDateString()}
      <br/>
      invoice id ={invoiceId}
    </div>
  )
}

export default Header
