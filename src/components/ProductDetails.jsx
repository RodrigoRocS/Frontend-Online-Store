import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { history } = this.props;
    const { details: { title, thumbnail, price } } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
        <p data-testid="product-detail-price">{ price }</p>
        <button
          data-testid="shopping-cart-button"
          onClick={ () => history.push('/cart') }
        >
          Comprar
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default ProductDetails;
