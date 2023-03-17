import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ListProducts extends Component {
  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Search</Link>
        <input type="text" />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
