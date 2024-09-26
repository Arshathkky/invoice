import React from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const inventory = [
    { label: 'Add Items', path: '/addItems' },
    { label: 'View Items', path: '/viewItems' },
    { label: 'Order', path: '/order' },
    
  ];
  const invoice = [
    { label: 'Add bill', path: '/addBill' },
    { label: 'View bill', path: '/ViewBill' },
    { label: 'view Customer', path: '/viewCustomer' },
    
  ];
  return (
    <div className='navbar'>
      <button className='button'>
        <Link className='link' to={'/dashboard'}>Dashboard</Link></button>
      <Dropdown items={inventory} head={"Inventory"} />
      <Dropdown items={invoice} head={"Invoice"} />
      <button className='button'>
        <Link className='link' to={'/account'}>Account</Link>
      </button>
      <button className='button'>
        <Link className='link' to={''}>Analysis</Link>
      </button>
      <button className='button'>
        <Link className='link' to={''}>Setting</Link>
      </button>
    </div>
  );
}

export default Navbar;
