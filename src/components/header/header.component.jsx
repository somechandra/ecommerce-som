import React from "react";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.styles.scss";

/**@function Contains logo and cart icon with number of items added to cart */
const Header = ({ hidden, cartItems, toggleCartHidden, itemCount }) => (
  <div className="header">
    <div className="logo-container">
      <Logo className="logo" />
    </div>
    <div className="options">
      <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
    </div>
    {hidden ? null : (
      <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden} />
    )}
  </div>
);

export default Header;
