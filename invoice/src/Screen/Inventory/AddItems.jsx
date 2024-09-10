import React from 'react'

const AddItems = () => {
  return (
    <div className='inventory'>
       <table className='form-group'>
            <tr>
              <th><label>Item Name</label></th>
              <td><input type='text' name='item_name' /></td>
            </tr>
            <tr>
              <th><label>Unit Price</label></th>
              <td><input type='text' name='item_name' /></td>
            </tr>
            <tr>
              <th><label>Quantity</label></th>
              <td><input type='text' name='item_name' /></td>
            </tr>
            <tr>
              <th><label>Distributer Name</label></th>
              <td><input type='text' name='item_name' /></td>
            </tr>
            <tr>
              <th><label>Order Date</label></th>
              <td><input type='text' name='item_name' /></td>
            </tr>

      </table>
      <button className='button'>Add Items</button>
    </div>
  )
}

export default AddItems