import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListProducts from './components/ListProducts';

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
        </Switch>
      </div>
    );
  }
}

export default App;
