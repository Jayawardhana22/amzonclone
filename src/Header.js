import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';



function Header() {
  return  <nav className="header">
      <img className='header__logo' src="/amazon-logo.png"
      alt='Amazon logo'
      />
      
      <div className='header__search'>
      <input type='text' className='header__searchInput'/>
      <SearchIcon className="header__searchIcon"/>
      </div>
    </nav>;
  
}

export default Header