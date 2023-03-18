import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListProducts from './components/ListProducts';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  state = {
    currProduct: [],
  };

  componentDidUpdate() {
    const { currProduct } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(currProduct));
  }

  getProduct = (title, thumbnail, price, id) => {
    const productObj = {
      title,
      thumbnail,
      price,
      id,
    };
    this.setState((prevState) => ({
      currProduct: [...prevState.currProduct, productObj],
    }));
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <ListProducts getProduct={ this.getProduct } /> }
          />
          <Route
            exact
            path="/cart"
            component={ ShoppingCart }
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
