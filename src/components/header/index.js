import React from 'react';
import './style.css';

const Header = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <a className="logo text-dark" href="#">ReStore</a>
      <a className="shopping-cart">
        <i className="bi bi-basket" />
        {numItems} items {total}
      </a>
    </header>
  );
};

export default Header;
