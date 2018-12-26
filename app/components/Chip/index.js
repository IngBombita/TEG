import React from 'react';
import PropTypes from 'prop-types';

import './src/style.css';

export default class Chip extends React.Component {
  onChipClick = elem => {};

  render() {
    return (
      <div
        onClick={this.onChipClick}
        onKeyDown={() => {}}
        role="button"
        tabIndex="0"
        id={`chip${this.props.province}`}
        className="chipDiv"
      >
        <svg
          height="100%"
          width="100%"
          viewBox="0 0 10 10"
          preserveAspectRatio="xMaxYMax"
          className="chip"
        >
          <circle
            cx="5"
            cy="5"
            r="5"
            stroke="black"
            strokeWidth="0"
            fill={this.props.color}
          />
          <text x="2" y="8" fontSize="10" fill="white">
            {this.props.armies}
          </text>
        </svg>
      </div>
    );
  }
}

Chip.propTypes = {
  color: PropTypes.string.isRequired,
  province: PropTypes.string.isRequired,
  armies: PropTypes.number.isRequired,
};
