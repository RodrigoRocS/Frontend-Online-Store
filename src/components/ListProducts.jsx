import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';


export default class ListProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((categories) => {
      this.setState({ categories });
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Search</Link>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          {categories.map(({ id, name }) => (
            <button key={ id } data-testid="category">
              {name}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
