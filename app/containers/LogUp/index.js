import React from 'react';
import RenderLogUp from '../../components/RenderLogUp';

/* eslint-disable react/prefer-stateless-function */
export class LogUp extends React.Component {
  handleClick = async info => {
    const url = 'http://localhost:3000/api/user/logup';

    console.log(info);

    const responsive = await fetch(url, {
      method: 'POST',
      body: info,
    });

    console.log(responsive);
  };

  render() {
    return <RenderLogUp onClick={this.handleClick} />;
  }
}

export default LogUp;
