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
  render() {
    return (
      <div id="dice">
        <RenderDice
          availableDice={this.props.availableDice}
          ref={dice => {
            this.props.diceRefCallback(dice);
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
            onClick={() => {
              if (this.props.onRollClick) this.props.onRollClick();
            }}
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
  diceRefCallback: PropTypes.func.isRequired,
  onRollClick: PropTypes.func.isRequired,
  onRollFinished: PropTypes.func,
};

export default DiceItem;
