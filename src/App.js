import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListProducts from './components/ListProducts';
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
            path="/cart"
            component={ ShoppingCart }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
