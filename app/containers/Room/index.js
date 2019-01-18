/**
 *
 * Room
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import * as Colyseus from 'colyseus.js';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRoom from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Room extends React.Component {
  constructor() {
    super();

    const endpoint = 'ws://localhost:3000';

    this.colyseus = new Colyseus.Client(endpoint);
    this.chatRoom = this.colyseus.join('chat');

    this.chatRoom.onMessage.add(message => {
      console.log('server just sent this message:');
      console.log(message);
      this.state.messages.push(message);
    });

    this.colyseus.onOpen.add(() => {
      console.log('connection is now open');
    });

    this.chatRoom.onStateChange.add(state => {
      console.log('the room state has been updated:', state);
      this.setState(state);
    });

    this.colyseus.onClose.add(() => {
      console.log('Connection closed');
    });
    this.colyseus.onError.add(err => {
      console.log('something wrong happened', err);
    });

    this.state = {
      currentText: '',
      messages: [],
    };
  }

  onUpdateRemote(newState, patches) {
    console.log('new state: ', newState, 'patches:', patches);
    this.setState(newState, this.autoScroll.bind(this));
  }

  onInputChange(e) {
    e.preventDefault();
    this.setState({ currentText: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.chatRoom.send(this.state.currentText);
    console.log(this.state);
    this.setState({ currentText: '' });
  }

  render() {
    return (
      <div>
        <div id="messages" ref="messages">
          {this.state.messages.map((message, i) => (
            <p key={i}>{message}</p>
          ))}
        </div>

        <form id="form" onSubmit={this.onSubmit.bind(this)}>
          <input
            id="input"
            type="text"
            onChange={this.onInputChange.bind(this)}
            value={this.state.currentText}
          />
          <button type="submit">send</button>
        </form>
      </div>
    );
  }
}

Room.propTypes = {};

const mapStateToProps = createStructuredSelector({
  room: makeSelectRoom(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'room', reducer });
const withSaga = injectSaga({ key: 'room', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Room);
