import React from 'react';
import {  BsJustify, BsSearch } from 'react-icons/bs';
import {  Outlet } from 'react-router-dom';

function Header({ OpenSidebar }) {
  return (
    <>
      <header className='header'>
        <div className='menu-icon'>
          <BsJustify className='icon' onClick={OpenSidebar} />
        </div>
        <div className='header-left'>
        <h4>Hello Gururaj Kulkarni</h4>

        </div>
        <div className='header-right'>
          <div className="search-bar">
            <BsSearch className='search-icon' />
            <input type="search"  />
          </div>
        
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
