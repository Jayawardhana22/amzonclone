import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { ShoppingBasket } from '@mui/icons-material';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //Add item to basket
    dispatch({
      type:'ADD_TO_BASKET',
      item: {
        id:id,
        titele:title,
        image : image,
        price: price,
        rating: rating,

      },
    });
  };

  return (
    <nav className="header">
      {/* Logo */}
      <Link to="/">
        <img className="header__logo" src="/amazon-logo.png" alt="Amazon logo" />
      </Link>

      {/* Search Box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* Navigation Links */}
      <div className="header__nav">
        {/* Link 1: Sign In */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Qazi</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* Link 2: Orders */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
        </Link>

        {/* Link 3: Prime */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* Link 4: Basket */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length }
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
