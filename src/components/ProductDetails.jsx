import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class ProductDetails extends Component {
  state = {
    details: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const details = await getProductById(id);
    this.setState({ details });
  }

  render() {
    const { match: { params: { id } }, getProduct } = this.props;
    const { details: { title, thumbnail, price } } = this.state;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <p data-testid="product-detail-name">{title}</p>
        <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
        <p data-testid="product-detail-price">{ price }</p>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ () => getProduct(title, thumbnail, price, id) }
        >
          Comprar
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  getProduct: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
export default ProductDetails;
