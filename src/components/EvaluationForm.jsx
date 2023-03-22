import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EvaluationForm extends Component {
  state = {
    email: '',
    rating: 0,
    text: '',
    isValid: true,
    evaluations: [],
  };

  componentDidMount() {
    const { id } = this.props;
    const takeSavedEvaluation = JSON.parse(localStorage.getItem(id));
    this.setState({ evaluations: takeSavedEvaluation || [] });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  evaluationSave = (id) => {
    const { email, rating, text } = this.state;
    const isValid = email.match(/^\S+@\S+.\S+$/) && rating > 0;
    if (isValid) {
      const evaluation = { email, rating, text };
      this.setState(
        (ps) => ({ evaluations: [...ps.evaluations, evaluation] }),
        () => {
          const { evaluations } = this.state;
          if (!JSON.parse(localStorage.getItem(id))) {
            localStorage.setItem(id, JSON.stringify([]));
          }
          const takeSavedEvaluation = JSON.parse(localStorage.getItem(id));
          const arrayEvaluation = [...evaluations, ...takeSavedEvaluation];
          localStorage.setItem(id, JSON.stringify(arrayEvaluation));
          this.setState({ email: '',
            rating: 0,
            text: '',
            isValid: true });
        },
      );
    }
    if (!isValid) this.setState({ isValid: false });
  };

  render() {
    const { id } = this.props;
    const { email, text, isValid, evaluations } = this.state;
    return (
      <div>
        <input
          data-testid="product-detail-email"
          type="email"
          name="email"
          placeholder="Email:"
          value={ email }
          required
          onChange={ this.onInputChange }
        />
        <div>
          Avaliação
          <label htmlFor="1">
            <input
              type="radio"
              name="rating"
              value="1"
              data-testid="1-rating"
              onClick={ this.onInputChange }
            />
            1
          </label>
          <label htmlFor="2">
            <input
              type="radio"
              name="rating"
              value="2"
              data-testid="2-rating"
              onClick={ this.onInputChange }
            />
            2
          </label>
          <label htmlFor="3">
            <input
              type="radio"
              name="rating"
              value="3"
              data-testid="3-rating"
              onClick={ this.onInputChange }
            />
            3
          </label>
          <label htmlFor="4">
            <input
              type="radio"
              name="rating"
              value="4"
              data-testid="4-rating"
              onClick={ this.onInputChange }
            />
            4
          </label>
          <label htmlFor="5">
            <input
              type="radio"
              name="rating"
              value="5"
              data-testid="5-rating"
              onClick={ this.onInputChange }
            />
            5
          </label>
        </div>
        <textarea
          name="text"
          value={ text }
          placeholder="Mensagem (opcional)"
          onChange={ this.onInputChange }
          data-testid="product-detail-evaluation"
        />
        <button
          data-testid="submit-review-btn"
          onClick={ () => {
            this.evaluationSave(id);
          } }
        >
          Avaliar

        </button>
        {!isValid && <p data-testid="error-msg">Campos inválidos</p>}
        {evaluations.length > 0
          && evaluations.map((e, i) => (
            <div key={ i }>
              <p data-testid="review-card-email">{ e.email }</p>
              <p data-testid="review-card-rating">{ e.rating }</p>
              <p data-testid="review-card-evaluation">{ e.text }</p>
            </div>))}
      </div>
    );
  }
}

EvaluationForm.propTypes = {
  id: PropTypes.string.isRequired,
};
export default EvaluationForm;
