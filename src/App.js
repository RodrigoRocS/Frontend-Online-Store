import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListProducts from './components/ListProducts';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={ ListProducts }
          />
          <Route
            exact
            path="/cart"
            component={ ShoppingCart }
          />
          <Route
            exact
            path="/ProductDeatils/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
