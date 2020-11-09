import React from "react";

import { apiCall } from "../../api/api";
import CollectionPage from "../collection/collection.component";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

/** This is main container. And has all transactions
 * @extends React.Component
 */
class Home extends React.Component {
  state = {
    collection: {
      title: "Catalog",
      items: []
    },
    hidden: true,
    cartItems: [],
    itemCount: 0,
    error: null
  };

  componentDidMount() {
    apiCall("https://run.mocky.io/v3/aea5d98a-654d-4423-bd99-6fbb90843730")
      .then((data) => {
        this.setState({
          collection: { ...this.state.collection, items: data.data }
        });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  }

  /**toggle hiddet state property */
  toggleCartHidden = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  /**Modify existing collection items
   * @returns {array} The collection items
   */
  modifyExistingCollectionItems = (item) => {
    return this.state.collection.items.map((collectionItem) =>
      collectionItem.id === item.id
        ? { ...collectionItem, quantity: collectionItem.quantity - 1 }
        : collectionItem
    );
  };

  /**Add item to the cart
   * @param {object} item - This is product item object
   */
  addItemToCart = (item) => {
    const existingCartItem = this.state.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    let updatedCartItems = [];
    if (existingCartItem) {
      updatedCartItems = this.state.cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCartItems = [...this.state.cartItems, { ...item, quantity: 1 }];
    }
    this.setState({
      itemCount: this.state.itemCount + 1,
      cartItems: updatedCartItems,
      collection: {
        ...this.state.collection,
        items: this.modifyExistingCollectionItems(item)
      }
    });
  };

  render() {
    return (
      <div>
        <Header
          hidden={this.state.hidden}
          cartItems={this.state.cartItems}
          toggleCartHidden={this.toggleCartHidden}
          itemCount={this.state.itemCount}
        />
        <div className="shop-page">
          <CollectionPage
            collection={this.state.collection}
            addItemToCart={this.addItemToCart}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
