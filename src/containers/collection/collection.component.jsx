import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

/**@function Holds list of collection items */
const CollectionPage = ({ collection, addItemToCart }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem
            key={item.id}
            item={item}
            addItemToCart={addItemToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
