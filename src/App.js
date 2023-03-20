import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListProducts from './components/ListProducts';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  state = {
    currProduct: [],
    productQuantity: 1,
  };

  componentDidUpdate() {
    const { currProduct } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(currProduct));
  }

  getProduct = (...params) => {
    const [title, thumbnail, price, id] = params;
    const productObj = {
      title,
      thumbnail,
      price,
      id,
      quantity: 1,
    };
    this.setState((prevState) => ({
      currProduct: [...prevState.currProduct, productObj],
    }));
  };

  removeProduct = (productId) => {
    this.setState((prevState) => {
      const updatedCart = prevState.currProduct.filter((item) => item.id !== productId);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      return { currProduct: updatedCart };
    });
  };

  decrement = (id) => {
    const { currProduct } = this.state;
    currProduct.find((item) => item.id === id).quantity -= 1;
    localStorage.setItem('cartItems', JSON.stringify(currProduct));
    this.setState((prevState) => ({
      productQuantity: prevState.productQuantity - 1,
    }));
  };

  increment = (id) => {
    const { currProduct } = this.state;
    currProduct.find((item) => item.id === id).quantity += 1;
    localStorage.setItem('cartItems', JSON.stringify(currProduct));
    this.setState((prevState) => ({
      productQuantity: prevState.productQuantity + 1,
    }));
  };

  render() {
    const { currProduct, productQuantity } = this.state;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<ListProducts
              getProduct={ this.getProduct }
              currProduct={ currProduct }
              productQuantity={ productQuantity }
            />) }
          />
          <Route
            exact
            path="/cart"
            render={ () => (<ShoppingCart
              removeProduct={ this.removeProduct }
              decrement={ this.decrement }
              increment={ this.increment }
              productQuantity={ productQuantity }
            />) }
          />
          <Route
            exact
            path="/ProductDeatils/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              getProduct={ this.getProduct }
            />) }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
