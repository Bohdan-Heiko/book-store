import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <Link to="/"> 
      <div className="logo text-dark">ReStore</div>
      </Link>
      <Link to="/cart"> 
      <div className="shopping-cart">
        <i className="bi bi-basket" />
        {numItems} items {total}
      </div>
      </Link>
    </header>
  );
};

export default Header;
