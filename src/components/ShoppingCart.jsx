import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ShoppingCart extends Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const { removeProduct, decrement, increment, productQuantity } = this.props;
    return (
      <div>
        {cartItems.length > 0 ? (
          cartItems.map(({ id, title, price, thumbnail }) => (
            <>
              <ProductCard
                key={ id }
                id={ id }
                title={ title }
                price={ price }
                thumbnail={ thumbnail }
              />
              <button
                data-testid="remove-product"
                onClick={ () => removeProduct(id) }
              >
                Excluir

              </button>
              <button
                onClick={ () => decrement(id) }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">{ productQuantity }</p>
              <button
                onClick={ () => increment(id) }
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
