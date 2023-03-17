import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories,
  getProductsFromCategoryAndQuery, getProductsFromID } from '../services/api';
import ProductCard from './ProductCard';

export default class ListProducts extends Component {
  state = {
    categories: [],
    productName: '',
    products: [],
    currProduct: [],
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
    const { results } = await getProductsFromCategoryAndQuery(productName);
    this.setState({ products: results });
  };

  filterProductsID = async (id) => {
    const { results } = await getProductsFromID(id);
    this.setState({ products: results });
  };

  getProduct = (title, thumbnail, price) => {
    const productObj = {
      title,
      thumbnail,
      price,
    };
    this.setState((prevState) => ({
      currProduct: [...prevState.currProduct, productObj],
    }));
  };

  render() {
    const { categories, productName, products } = this.state;

    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
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
            <button
              key={ id }
              data-testid="category"
              onClick={ () => this.filterProductsID(id) }
            >
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
                getProduct={ this.getProduct }
                id={ id }
              />)) : <p>Nenhum produto foi encontrado</p>}
        </div>
      </div>
    );
  }
}
