/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable object-shorthand */
import React from 'react';
import Dice from '../../components/Dice/Dice';
import './style.css';

const numberOfDie1 = 0;
const numberOfDie2 = 1;
const numberOfDie3 = 2;
const dieEnable = 1;
const dieDisable = 0;

export default class RenderDice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dice: [] };
    this.values = [];
  }

  componentWillMount() {
    this.calculateAvailableDice();
  }

  componentWillReceiveProps() {
    this.calculateAvailableDice();
  }

  calculateAvailableDice = () => {
    const dice = [dieDisable, dieDisable, dieDisable];

    for (let army = 0; army < this.props.availableArmies; army += 1) {
      dice[army] = dieEnable;
    }
    this.setState({ dice: dice });
  };

  rollDoneCallbackDie1 = num => {
    this.values.push(num);
    this.callAppropiateDieCallback(numberOfDie1);
  };

  rollDoneCallbackDie2 = num => {
    this.values.push(num);
    this.callAppropiateDieCallback(numberOfDie2);
  };

  rollDoneCallbackDie3 = num => {
    this.values.push(num);
    this.callAppropiateDieCallback(numberOfDie3);
  };

  callAppropiateDieCallback = numberOfDie => {
    if (numberOfDie + 1 === this.props.availableArmies) {
      this.sendProperties();
    }
  };

  sendProperties = () => {
    this.props.whenRoll(this.values);
  };

  rollAllDice = () => {
    this.values = [];
    this.reactDice.rollAll(this.props.randomNumbers[numberOfDie1]);
    this.reactDice1.rollAll(this.props.randomNumbers[numberOfDie2]);
    this.reactDice2.rollAll(this.props.randomNumbers[numberOfDie3]);
  };

  render() {
    return (
      <div>
        <div id="die1">
          <Dice
            numDice={this.state.dice[numberOfDie1]}
            rollDone={this.rollDoneCallbackDie1}
            outline
            disableIndividual
            faceColor="#0001ff"
            dotColor="#000100"
            ref={dice => (this.reactDice = dice)}
          />
        </div>
        <div id="die2">
          <Dice
            numDice={this.state.dice[numberOfDie2]}
            rollDone={this.rollDoneCallbackDie2}
            outline
            disableIndividual
            faceColor="#0001ff"
            dotColor="#000100"
            ref={dice => (this.reactDice1 = dice)}
          />
        </div>
        <div id="die3">
          <Dice
            numDice={this.state.dice[numberOfDie3]}
            rollDone={this.rollDoneCallbackDie3}
            outline
            disableIndividual
            faceColor="#0001ff"
            dotColor="#000100"
            ref={dice => (this.reactDice2 = dice)}
          />
        </div>
      </div>
    );
  }
}
