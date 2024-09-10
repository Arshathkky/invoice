import React from 'react'
import PrintComponent from '../PrintScreen'

const ViewItems = () => {
  
  return (
    <div className='inventory'>
      <table border={"1px"}>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Distributer</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>Name</td>
          <td>Quantity</td>
          <td>Unit Price</td>
          <td>Distributer</td>
          <td>Date</td>
        </tr>
      </table>
      <PrintComponent/>
    </div>
  )
}

export default ViewItems