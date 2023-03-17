import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { title, thumbnail, price, getProduct } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } alt="" />
        <p>{ price }</p>
        <button
          data-testid="product-add-to-cart"
          onClick={ () => getProduct(title, thumbnail, price) }
        >
          Comprar
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  getProduct: PropTypes.func.isRequired,
};
export default ProductCard;
