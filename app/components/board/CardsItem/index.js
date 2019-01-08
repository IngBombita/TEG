/**
 *
 * CardsItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import Objectives from '../../Objectives/index';
import MyCards from '../../MyCards';

import './src/style.css';

/* eslint-disable react/prefer-stateless-function */
class CardsItem extends React.PureComponent {
  renderCards = () => {
    const cardsArray = this.props.cards;

    return (
      <MyCards
        button
        focusVisible
        obj={{ cards: cardsArray }}
        onCardToggle={this.props.onCardToggle}
        checked={this.props.checked}
      />
    );
  };

  render() {
    return (
      <div id="cards">
        <div id="myProvinces">
          <h3 id="p">Mis Tarjetas de Provincias</h3>
          {this.renderCards()}
          <Button onClick={this.props.onCardsExchange} variant="contained" color="secondary">
            Canjear Por Ejercitos
          </Button>
        </div>
        <div id="globalGoal">
          <Objectives title="Objetivo Global" body="Conquistar 16 Provincias" />
        </div>
        <div id="personalGoal">
          <Objectives title="Objetivo Personal" body={this.personalGoal} />
        </div>
      </div>
    );
  }
}

CardsItem.propTypes = {
  cards: PropTypes.object.isRequired,
  checked: PropTypes.object.isRequired,
  onCardToggle: PropTypes.func.isRequired,
  onCardsExchange: PropTypes.func.isRequired,
};

export default CardsItem;
