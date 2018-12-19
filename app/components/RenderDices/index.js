/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable object-shorthand */
import React from 'react';
import ReactDice from 'react-dice-complete';
import './style.css';
import { debounce } from 'debounce';

export default class RenderDices extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dices: [0, 0, 0] };
    this.values = [];
  }

  limitarLLamadas = (func, maxXSeg) => {
    let bloqueoActivado = false; // Sirve para indicar que está bloqueada a la función

    return () => {
      const anularBloqueo = function() {
        bloqueoActivado = false;
      };

      if (!bloqueoActivado) {
        func.apply(this);
        // Bloqueamos
        bloqueoActivado = true;
        setTimeout(anularBloqueo, 1000 / maxXSeg);
      }
    };
  };

  componentWillMount() {
    const dices = [0, 0, 0];

    for (let armi = 0; armi < this.props.availableArmies; armi += 1) {
      dices[armi] = 1;
    }
    this.setState({ dices: dices });
  }

  componentWillReceiveProps() {
    const dices = [0, 0, 0];

    for (let armi = 0; armi < this.props.availableArmies; armi += 1) {
      dices[armi] = 1;
    }
    this.setState({ dices: dices });
  }

  rollDoneCallback = num => {
    this.values.push(num);
  };

  rollDoneCallback1 = num => {
    this.values.push(num);
  };

  rollDoneCallback2 = num => {
    this.values.push(num);
    setTimeout(this.sendProperties(), 1000);
  };

  sendProperties = () => {
    this.props.whenRoll(this.values);
  };

  rollAllDices = () => {
    this.values = [];
    this.reactDice.rollAll();
    this.reactDice1.rollAll();
    this.reactDice2.rollAll();
  };

  render() {
    return (
      <div>
        <div id="dice1">
          <ReactDice
            numDice={this.state.dices[0]}
            rollDone={this.rollDoneCallback}
            outline
            disableIndividual
            faceColor="#0001ff"
            dotColor="#000100"
            ref={dice => (this.reactDice = dice)}
          />
        </div>
        <div id="dice2">
          <ReactDice
            numDice={this.state.dices[1]}
            rollDone={this.rollDoneCallback1}
            outline
            disableIndividual
            faceColor="#0001ff"
            dotColor="#000100"
            ref={dice => (this.reactDice1 = dice)}
          />
        </div>
        <div id="dice3">
          <ReactDice
            numDice={this.state.dices[2]}
            rollDone={this.rollDoneCallback2}
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
