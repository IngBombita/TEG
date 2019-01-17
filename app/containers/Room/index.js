/**
 *
 * Room
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Client } from 'colyseus.js';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRoom from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Room extends React.Component {
  render() {
    const client = new Client('ws://localhost:3000');
    const room = client.join('chat');
    room.onJoin.add(() => {
      console.log(`${room.sessionId} joined!`);
    });

    room.onStateChange.add(state => {
      console.log('new state:', state);
    });

    room.onError.add(err => {
      console.log('oops, error ocurred:');
      console.log(err);
    });

    room.send('Hello world!');
    return <div />;
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
