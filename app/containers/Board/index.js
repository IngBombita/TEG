/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import map from './src/map.png';
import { runInThisContext } from 'vm';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0
    }
    this.imgRef = React.createRef();
  }
  onMapClick = (elem) => {
    var x = elem.pageX;
    var y = elem.pageY;
    console.log("Mouse pos: (", x, ',', y, ')');
  }

  componentDidMount() {
    
  }
  onLoad = () => {
    console.log("hola vieja");
    var img = this.imgRef.current;
    
    console.log(` Width: ${img.clientWidth} Height: ${img.clientHeight}`);
  }
  render() {
    return (
      <div /*ref={this.imgRef}*/>
        <img src={map} ref={this.imgRef} onLoad={this.onLoad} alt="board" onClick={this.onMapClick} />
      </div>
    );
  }
}
