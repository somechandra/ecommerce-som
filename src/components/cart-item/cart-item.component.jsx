import React from "react";

import "./cart-item.styles.scss";

/**@function holds cart item information */
const CartItem = ({ item: { image, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={image} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x {price}
      </span>
    </div>
  </div>
);

export default CartItem;
