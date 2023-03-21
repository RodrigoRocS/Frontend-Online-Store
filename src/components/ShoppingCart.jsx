import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ShoppingCart extends Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const { removeProduct, decrement, increment } = this.props;
    return (
      <div>
        {cartItems.length > 0 ? (
          cartItems.map(({ id, title, price, thumbnail, quantity }) => (
            <>
              <ProductCard
                key={ id }
                id={ id }
                title={ title }
                price={ price }
                thumbnail={ thumbnail }
                quantity={ quantity }
              />
              <button
                data-testid="remove-product"
                onClick={ () => removeProduct(id) }
              >
                Excluir

              </button>
              <button
                onClick={ () => {
                  decrement(id);
                  this.forceUpdate();
                } }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
              <button
                onClick={ () => {
                  increment(id);
                  this.forceUpdate();
                } }
                data-testid="product-increase-quantity"
              >
                +
              </button>
            </>
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

ShoppingCart.propTypes = {
  removeProduct: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
};
