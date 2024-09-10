import React from 'react'

const Header = () => {

    const  today = new Date();
  return (
    <div>
      Header
      <br/>
      <label>Customer name </label>
      <input className='' type='text' name='customer' />
      {today.toLocaleDateString()}
      <br/>
      invoice id = 01
    </div>
  )
}

export default Header
