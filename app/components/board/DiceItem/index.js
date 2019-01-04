/**
 *
 * DiceItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import RenderDice from '../../RenderDice';

import 'react-dice-complete/dist/react-dice-complete.css';
import './src/style.css';

/* eslint-disable react/prefer-stateless-function */
class DiceItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.diceRef = null;
  }

  handleDiceRollClick = () => {
    if (this.props.allowDiceRoll) this.diceRef.rollAllDice();
  };

  render() {
    return (
      <div id="dice">
        <RenderDice
          availableDice={this.props.availableDice}
          ref={ref => {
            this.diceRef = ref;
          }}
          whenRoll={() => {
            if (this.props.onRollFinished) this.props.onRollFinished();
          }}
          randomNumbers={this.props.diceNumbers}
        />
        <div id="buttonDice">
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleDiceRollClick}
          >
            Tirar los dados
          </Button>
        </div>
      </div>
    );
  }
}

DiceItem.propTypes = {
  diceNumbers: PropTypes.object.isRequired,
  availableDice: PropTypes.number.isRequired,
  onRollFinished: PropTypes.func,
  allowDiceRoll: PropTypes.bool.isRequired,
};

export default DiceItem;
