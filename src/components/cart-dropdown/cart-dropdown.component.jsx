import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

/**@function displays added cart information with its quantity */
const CartDropdown = ({ cartItems, toggleCartHidden }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">our cart is empty</span>
      )}
    </div>
    <CustomButton onClick={toggleCartHidden}>GO TO CHECKOUT</CustomButton>
  </div>
);

export default React.memo(CartDropdown);
