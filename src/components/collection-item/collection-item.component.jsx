import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

/**@function holds item information */
const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, image, quantity } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${image})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">
          <span>&#8377;</span>
          {price}
        </span>
      </div>
      <div className="collection-footer">
        <span className="quantity">
          <span>Quantity: </span>
          {quantity}
        </span>
      </div>
      <CustomButton
        className="custom-button"
        disabled={+quantity <= 0}
        onClick={() => addItemToCart(item)}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

export default React.memo(CollectionItem);
