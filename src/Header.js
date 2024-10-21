import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { ShoppingBasket } from '@mui/icons-material';






function Header() {
  return  <nav className="header">
    {/*logo on the */}
    <Link to="/">
      <img className='header__logo' src="/amazon-logo.png"
      alt='Amazon logo'
      />
</Link>
  
      {/*search box */}
      <div className="header__search">
      <input type='text' className='header__searchInput'/>
      <SearchIcon className="header__searchIcon"/>
      </div>
   

      {/* 3 Links*/}
      <div className='header__nav'>
             {/* 1 Link*/}
             <Link to={"/login"} className='header__link'>
             <div className='header__option'>
             <span className='header__optionLineOne'>Hello Qazi</span>
             <span className='header__optionLineTwo'>Sign In</span>
             </div>

             </Link>

                  {/* 2 Link*/}
                  <Link to={"/"} className='header__link'>
             <div className='header__option'>
             <span className='header__optionLineOne'>Return</span>
             <span className='header__optionLineTwo'>& orers</span>
             </div>

             </Link>

                       {/* 3 Link*/}
                       <Link to={"/"} className='header__link'>
             <div className='header__option'>
             <span className='header__optionLineOne'>Your</span>
             <span className='header__optionLineTwo'>Prime</span>
             </div>

             </Link>

             {/* 4 link*/}
             <Link to={"/checkout"} className='header__link'>
            <div className='header__optionBasket'>
              {/* shopping basket Icon */}
              <ShoppingBasket/>
              {/* Number of items in the basket*/ }
              <span className='header__optionLineTwo header__basketCount'>0</span>
              </div>
              </Link>
             
            


      </div>
    </nav>;
  
}

export default Header