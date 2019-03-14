/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import RenderLogUp from '../../components/RenderLogUp';

export class LogUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  handleClick = async info => {
    console.log(info);
    let res;

    try {
      res = await fetch(url, getResponseInfo(info));
    } catch (err) {
      console.log(err);
    }

    if (res.status !== STATUS_OK) {
      const typeError = await res.text();
      const errors = verifyError(typeError, info);
      this.setState({ errors });
    }
  };

  render() {
    return (
      <RenderLogUp onClick={this.handleClick} errors={this.state.errors} />
    );
  }
}

let verifyError = (err, info) => {
  let answer = [];
  console.log(err);
  switch (err) {
    case 'JSON body invalid':
      answer = findError(info);
      break;
    case 'email already exist':
      answer.push(err);
      break;
    case 'nickname already exist':
      answer.push(err);
      break;
    default:
      answer = '';
      break;
  }
  return answer;
};

let findError = info => {
  const PatternName = /^[a-zA-Z]*$/;
  const PatternNickName = /^\w+[\-\_\w]*$/;
  const PatternEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  const errors = [];

  if (!info.name.match(PatternName) || info.name === '') {
    errors.push('name');
  }
  if (!info.lastName.match(PatternName) || info.lastName === '') {
    errors.push('lastName');
  }
  if (!info.nickName.match(PatternNickName)) {
    errors.push('nickName');
  }
  if (!info.email.match(PatternEmail)) {
    errors.push('email');
  }
  if (info.password === '') {
    errors.push('password');
  }
  console.log(errors);
  return errors;
};

const STATUS_OK = 200;

const url = 'http://localhost:3000/api/user/logup';

const getResponseInfo = info => {
  const headers = new Headers();

  headers.append('Content-Type', 'application/json');

  return {
    method: 'POST',
    headers,
    body: JSON.stringify(info),
    cache: 'no-cache',
  };
};

export default LogUp;
