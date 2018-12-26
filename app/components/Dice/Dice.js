import React from 'react';
import PropTypes from 'prop-types';
import DiceContainer from './DiceContainer';

class ReactDice extends React.Component {
  constructor(props) {
    super(props);
    this.totalCb = this.totalCb.bind(this);
    this.rollAll = this.rollAll.bind(this);
  }

  static defaultProps = {
    outline: false,
    outlineColor: '#000000',
    dieSize: 60,
    disableIndividual: false,
    margin: 15,
    numDice: 4,
    sides: 6,
    rollTime: 2,
    faceColor: '#FF00AC',
    dotColor: '#1dff00',
  };

  totalCb(value) {
    this.props.rollDone(value);
  }

  rollAll(RandomNumber) {
    this.diceContainer.rollAll(RandomNumber);
  }

  render() {
    return (
      <div>
        <DiceContainer {...this.props} totalCb={this.totalCb}
          ref={c=> this.diceContainer = c} 
          />
      </div>
    );
  }
}

ReactDice.propTypes = {
  outline: PropTypes.bool,
  outlineColor: PropTypes.string,
  dieSize: PropTypes.number,
  disableIndividual: PropTypes.bool,
  margin: PropTypes.number,
  numDice: PropTypes.number,
  sides: PropTypes.number,
  rollTime: PropTypes.number,
  rollDone: PropTypes.func,
  faceColor: PropTypes.string,
  dotColor: PropTypes.string,
};

export default ReactDice;