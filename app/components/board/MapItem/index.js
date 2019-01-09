/**
 *
 * MapItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import ImageMapper from 'react-image-mapper';

import map from './src/map.png';
import './src/style.css';
import loadProvincesPolygons from './src/loader';

import Chip from '../../Chip';

// import styled from 'styled-components';

/* import { FormattedMessage } from 'react-intl';
import messages from './messages';
 <div>
          <FormattedMessage {...messages.header} />
         </div>
*/

const WIDTH_ABSOLUTE_SCALE = 1064;
// const HeightAbsoluteScale = 2160;
const BORDER_SIZE = 7;

class MapItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientWidth: 0,
    };

    this.colors = ['red', 'green', 'blue', 'orange', 'magenta', 'black'];
    this.polygonsMap = loadProvincesPolygons();
  }

  onResize = width => {
    this.setState({ clientWidth: width });
  };

  renderChips = () => {
    const chipComponents = [];
    const boardChips = this.props.chips;

    if (!boardChips) return <span />;

    boardChips.forEach(value => {
      const { province, player, armies } = value;

      chipComponents.push(
        <Chip
          key={province}
          province={province}
          color={this.colors[player]}
          armies={armies}
        />,
      );
    });

    return chipComponents;
  };

  render() {
    return (
      <div
        onClick={() => {}}
        onKeyDown={() => {}}
        role="button"
        tabIndex="0"
        id="mapId"
      >
        <ReactResizeDetector handleWidth onResize={this.onResize} />
        <ImageMapper
          src={map}
          map={this.polygonsMap}
          width={this.state.clientWidth}
          imgWidth={WIDTH_ABSOLUTE_SCALE}
          onClick={this.props.onMapClick}
          strokeColor={this.state.color}
          lineWidth={BORDER_SIZE}
        />
        <div id="chips">{this.renderChips()}</div>
      </div>
    );
  }
}

MapItem.propTypes = {
  onMapClick: PropTypes.func.isRequired,
  chips: PropTypes.object.isRequired,
};

export default MapItem;
