import React, { Component } from 'react';
import ProductCard from './ProductCard';

export default class ShoppingCart extends Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    return (
      <div>
        {cartItems.length > 0 ? (
          cartItems.map(({ id, title, price, thumbnail }) => (
            <ProductCard
              key={ id }
              id={ id }
              title={ title }
              price={ price }
              image={ thumbnail }
            />
          ))
        ) : (
          <p
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </p>
        )}
      </div>
    );
  }
}
