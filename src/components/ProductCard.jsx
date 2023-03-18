import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { title, thumbnail, price, getProduct, id } = this.props;
    return (
      <div data-testid="product">
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt="" />
        <p>{ price }</p>
        <button
          data-testid="product-add-to-cart"
          onClick={ () => getProduct(title, thumbnail, price, id) }
        >
          Comprar
        </button>
        <Link
          to={ `/ProductDeatils/${id}` }
          data-testid="product-detail-link"
        >
          Details

        </Link>
        <p data-testid="shopping-cart-product-quantity">Quantidade: 1</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  getProduct: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default ProductCard;
