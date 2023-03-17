import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';

export default class ListProducts extends Component {
  state = {
    categories: [],
    productName: '',
    products: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  filterProducts = async () => {
    const { productName } = this.state;
    const getProduct = await getProductsFromCategoryAndQuery(productName);
    this.setState({ products: getProduct });
  };

  render() {
    const { categories, productName, products } = this.state;

    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Search</Link>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.onInputChange }
          name="productName"
          value={ productName }
        />
        <button
          data-testid="query-button"
          onClick={ this.filterProducts }
        >
          Buscar
        </button>
        <div>
          {categories.map(({ id, name }) => (
            <button key={ id } data-testid="category">
              {name}
            </button>
          ))}
        </div>
        <div>
          { products.length > 0
            ? products.map(({ id, title, price, thumbnail }) => (
              <ProductCard
                key={ id }
                title={ title }
                price={ price }
                thumbnail={ thumbnail }
              />)) : <p>Nenhum produto foi encontrado</p>}
        </div>
      </div>
    );
  }
}
